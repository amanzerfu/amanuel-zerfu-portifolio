import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CONTACT_OPTION from '@/app/hooks/ui/sociallinks';


const SocialLinks = () => {
    return (
        <div>
            <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem" }}>

                <a
                    href={CONTACT_OPTION.GIT_HUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#c9a227", fontWeight: "600", transition: "color 0.3s" }}
                >
                    <GitHubIcon />
                </a>
                <a
                    href={CONTACT_OPTION.LINKED_IN}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#c9a227", fontWeight: "600", transition: "color 0.3s" }}
                >
                    <LinkedInIcon />
                </a>
                <a
                    href={CONTACT_OPTION.EMAIL}
                    style={{ color: "#c9a227", fontWeight: "600", transition: "color 0.3s" }}
                >
                    <EmailIcon />
                </a>

            </div>
        </div>
    );
};

export default SocialLinks;