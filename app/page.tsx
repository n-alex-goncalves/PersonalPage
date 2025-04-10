import { ABOUT_ME } from '@/app/constants';


export default function About() {
  return (
    <>
      <h1 className="text-xl font-semibold mb-6">ABOUT</h1>
      <p className="whitespace-pre-line leading-relaxed max-w-prose">
        {ABOUT_ME}
      </p>
    </>
  );
}