import ComingSoon from "@/components/ComingSoon";

export const metadata = {
  title: "Projects — Coming Soon",
  robots: { index: false, follow: false },
};

export default function ProjectsPage() {
  return (
    <ComingSoon
      title="Projects"
      blurb="A portfolio index with write-ups, screenshots, architecture diagrams, and links to live demos & GitHub."
    />
  );
}
