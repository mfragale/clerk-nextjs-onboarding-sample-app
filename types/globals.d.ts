export { };

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      onboardingComplete?: boolean;
      applicationName?: string;
      applicattionType?: string;
    };

  }
}