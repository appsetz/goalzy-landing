export interface VerifyRecaptchaResponse {
  success: boolean;
  score?: number;
  action?: string;
  error?: string;
  errors?: string[];
}

export async function verifyRecaptchaToken(
  token: string
): Promise<VerifyRecaptchaResponse> {
  try {
    const response = await fetch('/api/recaptcha/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || 'Verification failed',
        errors: data.errors,
      };
    }

    return {
      success: true,
      score: data.score,
      action: data.action,
    };
  } catch (error) {
    console.error('Error verifying reCAPTCHA token:', error);
    return {
      success: false,
      error: 'Failed to verify reCAPTCHA token',
    };
  }
}
