import { NextRequest, NextResponse } from 'next/server';

interface RecaptchaResponse {
  success: boolean;
  score: number;
  action: string;
  challenge_ts: string;
  hostname: string;
  error_codes?: string[];
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { token } = body;

    if (!token) {
      return NextResponse.json(
        { error: 'Token is required' },
        { status: 400 }
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
      console.error('reCAPTCHA Secret Key is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data: RecaptchaResponse = await response.json();

    // Check if verification was successful
    if (!data.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'reCAPTCHA verification failed',
          errors: data.error_codes 
        },
        { status: 400 }
      );
    }

    // Check score threshold for bot detection
    // Score ranges from 0.0 to 1.0
    // 1.0 is very likely a legitimate interaction
    // 0.0 is very likely a bot
    const threshold = 0.5; // Adjust based on your needs

    if (data.score < threshold) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Suspicious activity detected',
          score: data.score 
        },
        { status: 403 }
      );
    }

    return NextResponse.json({
      success: true,
      score: data.score,
      action: data.action,
    });
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
