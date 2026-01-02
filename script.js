// Roadmap Data from the PDF
const roadmapData = [
    {
        title: "Networking Fundamentals",
        days: "Days 1–15",
        items: [
            "How the internet actually works (client–server)",
            "IP address, MAC address",
            "DNS, DHCP",
            "TCP vs UDP",
            "Ports, protocols",
            "HTTP / HTTPS basics",
            "Practice: Ping, traceroute, basic traffic flow"
        ]
    },
    {
        title: "Master Linux & OS Basics",
        days: "Days 10–15 (Overlap)",
        items: [
            "Linux file system (/ , /home , /etc , /var)",
            "Basic terminal commands (ls, cd, grep, find, chmod)",
            "Processes & services",
            "Users, groups, permissions",
            "System logs",
            "Practice: Kali Linux, terminal-only usage"
        ]
    },
    {
        title: "Understand Cyber Attacks & Security Concepts",
        days: "10 days",
        items: [
            "Phishing",
            "Brute force attacks",
            "Man-in-the-Middle (MITM)",
            "DDoS basics",
            "Malware overview",
            "Encryption vs hashing",
            "Public & private keys",
            "CIA Triad (Confidentiality, Integrity, Availability)"
        ]
    },
    {
        title: "Learn Ethical Hacking Tools",
        days: "15–20 days",
        items: [
            "Nmap – Network scanning & enumeration",
            "Wireshark – Packet capturing & analysis",
            "Burp Suite – Web application testing",
            "Metasploit – Exploitation framework",
            "Hydra – Password attacks",
            "John the Ripper – Password cracking",
            "Nikto – Web server scanning",
            "Practice: Kali Linux, VirtualBox / VMware labs"
        ]
    },
    {
        title: "Specialize in Web Application Security",
        days: "15–20 days",
        items: [
            "Frontend vs backend",
            "Request–response cycle",
            "Cookies, sessions, tokens",
            "Authentication vs authorization",
            "SQL Injection (SQLi)",
            "Cross-Site Scripting (XSS)",
            "Cross-Site Request Forgery (CSRF)",
            "Broken Authentication",
            "Insecure Direct Object References (IDOR)",
            "Access control issues",
            "Logic flaws"
        ]
    },
    {
        title: "Practice via CTFs",
        days: "15 days",
        items: [
            "TryHackMe (Beginner → Intermediate)",
            "PicoCTF (Logic & fundamentals)",
            "Hack The Box (Intermediate → Advanced)",
            "Focus on enumeration and note-taking"
        ]
    },
    {
        title: "Bug Bounty & Earning",
        days: "10 days",
        items: [
            "Understanding bug bounty programs",
            "Reading scope properly",
            "Reporting vulnerabilities clearly",
            "Avoiding duplicate submissions",
            "Focus on quality over quantity"
        ]
    },
    {
        title: "Certifications (Optional)",
        days: "Flexible",
        items: [
            "Structured learning support",
            "Resume credibility",
            "Interview preparation",
            "Works best with strong fundamentals"
        ]
    }
];

// Render Roadmap
const roadmapContainer = document.getElementById('roadmap-container');

function renderRoadmap() {
    roadmapContainer.innerHTML = '';
    roadmapData.forEach((phase, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        // Add a slight stagger delay for a smooth entrance if we added animation
        
        item.innerHTML = `
            <div class="timeline-marker">
                <div class="timeline-dot"></div>
            </div>
            <div class="timeline-content">
                <div class="timeline-header" onclick="toggleItem(this)">
                    <div class="timeline-title-group">
                        <span class="timeline-days">${phase.days}</span>
                        <span class="timeline-title">${phase.title}</span>
                    </div>
                    <div class="toggle-icon">+</div>
                </div>
                <div class="timeline-body">
                    <ul>
                        ${phase.items.map(i => `<li>${i}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        roadmapContainer.appendChild(item);
    });
}

function toggleItem(header) {
    const item = header.parentElement.parentElement;
    const icon = header.querySelector('.toggle-icon');
    
    // Close others if we want accordion style? For now let's keep multiple open allowed
    // But user asked for "user control roadmap like open close"
    
    item.classList.toggle('active');
}

// Controls
document.getElementById('expand-all').addEventListener('click', () => {
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.classList.add('active');
    });
});

document.getElementById('collapse-all').addEventListener('click', () => {
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.classList.remove('active');
    });
});

// Initialize
renderRoadmap();
