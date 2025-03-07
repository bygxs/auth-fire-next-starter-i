// app/onboarding/[step]/page.tsx
export default function OnboardingStep({ params }: { params: { step: string } }) {
    const { step } = params;
  
    if (step === "welcome") {
      return <div>Welcome to the App!</div>;
    } else if (step === "profile-setup") {
      return <div>Set up your profile.</div>;
    } else if (step === "preferences") {
      return <div>Select your preferences.</div>;
    } else if (step === "confirmation") {
      return <div>Onboarding complete!</div>;
    }
  
    return <div>Invalid step.</div>;
  }