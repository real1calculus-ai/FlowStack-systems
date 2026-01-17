import { Github, Linkedin, Instagram, MessageCircle, Twitter } from 'lucide-react'
import { site } from '@/lib/site'

const socialLinks = [
  { name: 'X (Twitter)', href: site.social.x, icon: Twitter },
  { name: 'Instagram', href: site.social.instagram, icon: Instagram },
  { name: 'Telegram', href: site.social.telegram, icon: MessageCircle },
  { name: 'LinkedIn', href: site.social.linkedin, icon: Linkedin },
  { name: 'GitHub', href: site.social.github, icon: Github },
]

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((social) => {
        const Icon = social.icon
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-muted hover:text-fg transition-colors"
            aria-label={social.name}
          >
            <Icon size={20} />
          </a>
        )
      })}
    </div>
  )
}