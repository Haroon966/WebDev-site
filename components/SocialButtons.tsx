import { AnimatedInstagram, AnimatedGithub } from './AnimatedIcons'

export default function SocialButtons() {
  return (
    <div className="social-buttons">
      <a
        href="https://github.com/Haroon966"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub - Haroon Ali"
        className="social-btn github"
      >
        <AnimatedGithub size={20} />
        <span>Haroon Ali</span>
      </a>
      <a
        href="https://github.com/sameersheikh3999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub - Sameer Sheikh"
        className="social-btn github"
      >
        <AnimatedGithub size={20} />
        <span>Sameer Sheikh</span>
      </a>
    </div>
  )
}

