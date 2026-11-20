function SocialLinks() {
    return (
        <div className="flex items-center justify-center gap-8">
            <a href="#" aria-label="Facebook" className="group">
                <span className="block h-6 w-6 bg-[#8486a9] transition-colors duration-300 group-hover:bg-[#fb6087]"
                  style={{
                    mask: "url('/images/icon-facebook.svg') center / contain no-repeat",
                    WebkitMask: "url('/images/icon-facebook.svg') center / contain no-repeat",
                  }}
                />
            </a>
            <a href="#" aria-label="Pinterest" className="group">
                <span className="block h-6 w-6 bg-[#8486a9] transition-colors duration-300 group-hover:bg-[#fb6087]"
                  style={{
                    mask: "url('/images/icon-pinterest.svg') center / contain no-repeat",
                    WebkitMask: "url('/images/icon-pinterest.svg') center / contain no-repeat",
                  }}
                />
            </a>
            <a href="#" aria-label="Instagram" className="group">
                <span className="block h-6 w-6 bg-[#8486a9] transition-colors duration-300 group-hover:bg-[#fb6087]"
                  style={{
                    mask: "url('/images/icon-instagram.svg') center / contain no-repeat",
                    WebkitMask: "url('/images/icon-instagram.svg') center / contain no-repeat",
                  }}
                />
            </a>
        </div>
    );
}
export default SocialLinks;