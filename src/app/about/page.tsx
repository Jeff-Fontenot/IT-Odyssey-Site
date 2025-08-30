import ComingSoon from "@/components/ComingSoon";

export const metadata = {
  title: "About — Coming Soon",
  robots: { index: false, follow: false }, // remove when page is ready
};

export default function AboutPage() {
  return (
    <ComingSoon
      title="About"
      blurb="I’m polishing the story behind IT Odyssey—mission, background, and what I’m building next."
    />
  );
}
