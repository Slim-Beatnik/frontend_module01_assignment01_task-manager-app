import AnimatedLogoOptionalRedirect from '../components/AnimatedLogoOptionalRedirect';

export default function Callback() {
  return (
    <div className="bg-dracula-bg flex h-screen w-screen items-center justify-center">
      <AnimatedLogoOptionalRedirect redirectTo={'/dashboard'} />
    </div>
  );
}
