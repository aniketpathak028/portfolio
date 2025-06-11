import { redirect, RedirectType } from "next/navigation";

export default function Resume() {
  redirect("https://aniketpathak028.github.io/resume.pdf", RedirectType.replace);
}