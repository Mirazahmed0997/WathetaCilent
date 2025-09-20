import {
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Globe,
  Twitch,
  Dribbble,
  Mail,
  Link
} from 'lucide-react';

// Match hostnames to Lucide icons
const socialIconMap = [
  { keyword: "facebook", icon: Facebook },
  { keyword: "youtube", icon: Youtube },
  { keyword: "twitter", icon: Twitter },
  { keyword: "linkedin", icon: Linkedin },
  { keyword: "instagram", icon: Instagram },
  { keyword: "github", icon: Github },
  { keyword: "twitch", icon: Twitch },
  { keyword: "dribbble", icon: Dribbble },
  { keyword: "mailto", icon: Mail },
  { keyword: "link", icon: Link },
];

export default function getSocialIcon(link) {
  if (!link) return Globe;

  let host = "";

  try {
    const url = new URL(link);
    host = url.hostname.toLowerCase();
  } catch {
    // If it's a mailto or invalid URL, fallback to raw string
    host = link.toLowerCase();
  }

  for (const item of socialIconMap) {
    if (host.includes(item.keyword)) {
      return item.icon;
    }
  }

  return Globe;
}
