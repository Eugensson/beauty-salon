import Link from "next/link";

import { socialLinks } from "@/constants";

interface SocialProps {
  containerStyles?: string;
}

export const Social: React.FC<SocialProps> = ({ containerStyles }) => {
  return (
    <ul className={containerStyles}>
      {socialLinks.map(({ name, href, icon: Icon }, index) => (
        <li key={index}>
          <Link
            href={href}
            className="text-white"
            target="_blank"
            rel="noreferrer"
            aria-label={`Link to ${name}`}
          >
            <Icon size={20} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
