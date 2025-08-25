// init variables

// about-me-div
const aboutMeDivContent = 
`
    <h1>
    Who am I?
    </h1>
    <p>
        Hi! I’m Euge Kyle Fabella, a passionate IT student currently pursuing a Bachelor of Science in Information Technology at 
        STI Colleges of Santa Rosa City. I have a growing interest in system administration, network technologies, and software and web development, and 
        I am eager to expand my knowledge and skills in these areas. With a strong dedication to learning, 
        I’m excited to explore the world of technology and contribute to meaningful solutions in the future.
    </p>
    <h2>
        More about Me:
    </h2>
    <p>
        <ul>
            <li>
                For starters, my hobbies. I am a self-taught pianist, I play from classical to modern pop musics. As long as the piece is 
                melodical, I am sure to enjoy it generally and would try to play it with my piano. I also do digital painting, drawing in 
                Clip Studio Paint and sometimes post my drawings online.
            </li>
            <li>
                I enjoy consuming anime media and also the Japanese culture. I mostly watch popular animes of the season and read 
                mangas, webtoons, and light-novels that pique my interests. I also enjoy foreign cultures generally, I tend to read about 
                other nation's traditions, people, foods, customs, and sometimes study their language if I feel like it.
            </li>
            <li>
                As for physical activities, I do cycling (riding my fixed gear), play badminton (casually, still a beginner), and walking. 
                This helps me promote an active living as usually in the IT field, ITs tend to sit on their seats and only moves when 
                they need to.
            </li>
        </ul>
    </p>
`;

// professional-development-div
const professionalDevelopmentDivContent =
`
    <!-- Go back here and recheck, don't like how it resizes. [FIX] -->
    <h1 class="center-elements-inside">Professional Development<br>(Credentials)</h1>

    <div class="container">
        <div class="sub-container add-border-radius-with-bg center-elements-inside">
            <h2>
                System Administration
                <br>
                (Certificate)
            </h2>
            <img src="resources/certificates/system-administration-img.png" 
            alt="system-administration-img">
        </div>

        <div class="sub-container add-border-radius-with-bg center-elements-inside">
            <h2>
                Java Foundations
                <br>
                (Certificate)
            </h2>
            <img src="resources/certificates/java-foundations-img.png" 
            alt="java-foundations-img"">
        </div>

        <div class="sub-container add-border-radius-with-bg center-elements-inside">
            <h2>
                Zuitt: Basic Web Development Workshop
                <br>
                (Certificate - Acquiring...)
            </h2>
            <img src="resources/certificates/certificate-img-placeholder.png" 
            alt="Zuitt-Basic-Web-Development-Workshop-Certificate-img"
            class="learning"">
        </div>

        <div class="sub-container add-border-radius-with-bg center-elements-inside">
            <h2>
                Net Academy: Introduction to Cybersecurity
                <br>
                (Badge - Acquiring...)
            </h2>
            <img src="https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/badges/badge-images/introduction_to_cybersecurity_16.png" 
            alt="introduction-to-cybersecurity-badge-img"
            class="learning"">
        </div>

        <div class="sub-container add-border-radius-with-bg center-elements-inside">
            <h2>
                Obtaining more professional development...
            </h2>
        </div>

        <div class="sub-container add-border-radius-with-bg center-elements-inside">
            <h2>
                Obtaining more professional development...
            </h2>
        </div>
    </div>

    <style>
        .container {
            display: grid;
            grid-template-columns: 50% 50%;
            grid-template-rows: auto;
            gap: 1em;
        }

        .sub-container {
            padding: 1.5em 2em;  
        }

        .sub-container img {
            height: 40vh;
            width: 25vw;

            /*
                Not using [.add-border-radius-with-bg] class attribute from custom styles because it's a custom style in a separate class
                and can't be implemented in this [].css] directly. And even if I did, I have to do it 
                one by one, a little unproductive, so just implemented it here.
            */
            /* 
                Since credentials has different sizes, I'll just manually adjust its sizes for a better fitting. 
            */
            border-radius: 40px;
        }
        
        h1, h2 {
            text-align: center;
        }

        .learning {
            filter: blur(5px);
        }
    </style>
`;

// education-and-experiences-div
// Recheck this one.
const educationAndExperiencesDivContent =
`
    <h1 class="center-elements-inside">
        Education & Experiences
    </h1>

    <!-- 
        I've thought that the college I went to should be the first information 
        to show in this div, therefore, the default set of information would be STI College 
        Santa Rosa.        
    -->
    <div class="container center-elements-inside add-border-radius-with-bg">
        <div class="sub-container center-elements-inside" id="sub-container">
            <h2 id="education-and-experiences-description">
                Batch of 2021-2025 (Graduated)<br>Program: Bachelor of Science in Information Technology
            </h2>
            <img src="resources/educations/sti.jpg" 
            alt="sti-img"  id="img-viewer">
        </div>

        <h2 id="education-and-experiences-title">
            College: STI College Santa Rosa
        </h2>
        
        <div class="options-icons" id="options-icons">
            <img src="resources/educations/sti.jpg" 
                alt="sti-img" id="sti-icon" onclick="ViewSTICollege()">

            <img src="resources/educations/mcl.png" 
                alt="mcl-img" id="mcl-icon" onclick="ViewMCLCollege()">

            <img src="resources/educations/tmi.jpg" 
                alt="practicum-img" id="ojt-icon" onclick="ViewPracticum()">

            <img src="resources/educations/education-and-experiences-placeholder.jpg" 
            alt="education-and-experiences-placeholder-img" id="education-and-experiences-placeholder-icon" onclick="ViewPlaceholder()">
        </div>
    </div>

    <style>
        .container {
            height: 50vh;
            width: 60vw;
            padding: 1.5em 0em;
            margin: auto;
        }
        .sub-container {
            position: relative;
        }
        .sub-container img {
            height: 30vh;
            width: 45vw;
            object-fit: cover;
            border-radius: 40px;
            transition: 0.25s;
        }
        .options-icons {
            display: flex;
            flex-wrap: wrap;
        }
        .options-icons img {
            height: 4em;
            width: 4em;
            padding: 0em 0.5em;
            object-fit: cover;
            border-radius: 50%;
            padding: 0em 2em;
            cursor: pointer;
            transition: 0.25s;
            opacity: 0.5;
        }
        .options-icons img:hover {
            transform: scale(1.15);
        }
        #education-and-experiences-description {
            position: absolute;

            text-align: center;
            align-content: center;
            color: rgba(0, 0, 0, 0);
            z-index: 2;
        }
        #sti-icon {
            opacity: 1;
            transform: scale(1.25);
        }
        .sub-container:hover h2 {
            color: rgb(255, 255, 255) !important;

        }
        .sub-container:hover img {
            transform: scale(1.025);
            opacity: 0.25;
        }
    </style>
`;

// tech-stack-div
const techStackDivContent =
`
    <h1 class="center-elements-inside">
        Tech Stack
    </h1>

    <div class="container">
        <!-- IDEs and Code Editors -->
        <div class="sub-container add-border-radius-with-bg">
            <h2>
                IDEs, Code Editors, and Developer Platform
            </h2>
            <p>
                In developing, the compiler I use is Microsoft Visual Studio, known for its great features and 
                compatibility with the Windows operating system. With the integration of the C# programming 
                language and MSSQL as its database, developing applications becomes much more productive. As 
                for code editing, I use Microsoft Visual Studio Code, a powerful code editing software that 
                suits all my needs; from Java to Python, coding and scripting becomes really efficient. For my 
                developer platform, I use GitHub for version control, uploading my repositories, and collaborating 
                with other developers. 
            </p>
            <div class="icons">
                <img src="resources/IDEs and Code Editors/visual studio code.png" 
                alt="visual-studio-code-icon">
                <img src="resources/IDEs and Code Editors/visual studio.png" 
                alt="visual-studio-icon">
                <img src="resources/github-logo.png" 
                alt="github-logo">
            </div>
        </div>

        <!-- Programming Languages and Database -->
        <div class="sub-container add-border-radius-with-bg">
            <h2>
                Programming Languages and Database
            </h2>
            <p>
                In this list, I am most familiar with the C# programming langauge. Its objective-oriented 
                programming is an incredible feature that I find myself mostly utilizing at all times. Same case 
                with Java, although much more verbose, its Java Runtime Environment makes it possible for it to 
                run my applications on any operating systems. Scripting with Python has been a godsend to most 
                developers because of its powerful yet clean script writing, which makes developing data structures 
                and algorithms much more readable and robust. My database is MSSQL because of its robust performance, 
                comprehensive security features, and seamless integration with other Microsoft tools, making it ideal 
                for managing and analyzing complex datasets efficiently.
            </p>
            <div class="icons">
                <img src="resources/Programming Languages and Database/c-sharp-icon.png" 
                alt="c-sharp-icon">
                <img src="resources/Programming Languages and Database/java-icon.png" 
                alt="java-icon">
                <img src="resources/Programming Languages and Database/python-icon.png" 
                alt="python-icon">
                <img src="resources/Programming Languages and Database/mssql.png" 
                alt="mssql-icon">
            </div>
        </div>

        <!-- Multimedia Applications -->
        <div class="sub-container add-border-radius-with-bg">
            <h2>
                Multimedia Applications
            </h2>
            <p>
                For video and illustrations, I use Adobe Premiere, Photoshop, Illustrator, Lightroom, DaVinci, and Clip Studio Paint Resolve to create engaging visual content, such 
                as gameplay videos and vlogs; charts, logos, illustrations, and user guides, both for my hobbies and in professional settings. 
                Additionally, I use Figma for designing user-friendly interfaces and wireframes, streamlining the development 
                process and enhancing collaborations among developers and their teams (our capstone project).
            </p>
            <div class="icons">
                <img src="resources/Multimedia Applications/premiere.png" 
                alt="premiere">
                <img src="resources/Multimedia Applications/photoshop.png" 
                alt="photoshop-icon">
                <img src="resources/Multimedia Applications//illustrator.png" 
                alt="illustrator-icon">
                <img src="resources/Multimedia Applications/lightroom.png" 
                alt="lightroom-icon">
                <img src="resources/Multimedia Applications/davinci.png" 
                alt="davinci-icon">
                <img src="resources/Multimedia Applications/csp.png" 
                alt="csp-icon">
                <img src="resources/Multimedia Applications/figma.png" 
                alt="figma-icon"> 
            </div>
        </div>

        <!-- Operating Systems -->
        <div class="sub-container add-border-radius-with-bg">
            <h2>
                Operating Systems
            </h2>
            <p>
                I am highly familiar with Windows (my main operating system), then macOS and Ubuntu, leveraging these 
                operating systems for configuring and troubleshooting. My experience includes managing user accounts locally, 
                software installations, and system updates to support daily operations. Additionally, I have foundational 
                knowledge of Fedora, enabling me to adapt to and troubleshoot diverse technical challenges in 
                cross-platform settings.
            </p>
            <div class="icons">
                <img src="resources/Operating Systems/windows.png" 
                alt="windows-icon">
                <img src="resources/Operating Systems/macOS.png" 
                alt="macOS-icon">
                <img src="resources/Operating Systems/ubuntu.png" 
                alt="ubuntu-icon">
                <img src="resources/Operating Systems/fedora.png" 
                alt="fedora-icon">
            </div>
        </div>

        <!-- Network Simulators and Technologies -->
        <div class="sub-container add-border-radius-with-bg">
            <h2>
                Network Simulators and Technologies
            </h2>
            <p>
                I use Huawei Cisco Packet Tracer and Huawei eNSP to simulate, test, and validate network configurations in a 
                controlled environment, ensuring reliability and efficiency before deployment. These tools allow me to explore 
                complex networking scenarios, troubleshoot issues effectively, and gain hands-on experience with real-world 
                technologies. By using these simulators, I can build and refine skills in routing, switching, and cloud-based 
                networking solutions, making them invaluable for mastering modern IT infrastructure. As for cloud computing 
                services, I use Huawei Cloud for all three services: infrastructure as a service, platform as a service, and 
                software as a service; ranging from cloud storages to website hostings.
            </p>
            <div class="icons">
                <img src="resources/Network Simulators and Technologies/cisco packet tracer.png" 
                alt="cisco-icon">
                <img src="resources/Network Simulators and Technologies/eNSP.png" 
                alt="eNSP-icon">
                <img src="resources/Network Simulators and Technologies/huawei cloud.png" 
                alt="huawei-cloud-icon">
            </div>
        </div>

        <!-- Web Systems and Technologies -->
        <div class="sub-container add-border-radius-with-bg">
            <h2>
                Web Systems and Technologies
            </h2>
            <p>
                The classic trio in web development, HTML for the webpage's body elements and structures, CSS for its style, and 
                JavaScript for its backend, frontend, and general scripting. 
                With JavaScript's web enhancements, developing websites, 
                webpages, and/or webapps has been a breeze. Being able to dynamically modify your webpages during runtime 
                is such an amazing feature.
            </p>
            <div class="icons">
                <img src="resources/Web Systems and Technologies/html.png" 
                alt="html-icon">
                <img src="resources/Web Systems and Technologies/css-icon.icon" 
                alt="css-icon">
                <img src="resources/Web Systems and Technologies/js-icon.png" 
                alt="js-icon">
            </div>
        </div>

        <!-- Producitivty Suite and Project Managing -->
        <div class="sub-container add-border-radius-with-bg">
            <h2>
                Producitivty Suite and Project Managing
            </h2>
            <p>
                For productivity applications, I mostly use Office 365, known for its solid and packed in features applications.
                Ranging from Microsoft Word to Outlook. But I am flexible, I'll learn any given productivity suites (i.e. Google Workspace) 
                so I can utilize the applications effectively. For project managing, I use GitHub's 
                built-in project management feature. Being able to track bugs, deadlines, progress, and more for me and the whole 
                team. 
            </p>
            <div class="icons">
                <img src="resources/Productivity Suite and Project Managing/word.png" 
                alt="word-icon">
                <img src="resources/Productivity Suite and Project Managing/powerpoint.png" 
                alt="powerpoint-icon">
                <img src="resources/Productivity Suite and Project Managing/excel.png" 
                alt="excel-icon">
                <img src="resources/Productivity Suite and Project Managing/onedrive.png" 
                alt="onedrive-icon">
                <img src="resources/Productivity Suite and Project Managing/teams.png" 
                alt="teams-icon">
                <img src="resources/Productivity Suite and Project Managing/outlook.png" 
                alt="outlook-icon">
                <img src="resources/Productivity Suite and Project Managing/archimate.png" 
                alt="archimate-icon">
                <img src="resources/github-logo.png" 
                alt="github-icon">
            </div>
        </div>

        <!-- Frameworks -->
        <div class="sub-container add-border-radius-with-bg">
            <h2>
                Learning
            </h2>
            <p>
                Obtaining more tech stacks...
            </p>
            <div class="icons">
                <img src="resources/Skills/learning.png" 
                alt="">
            </div>
        </div>
    </div>

    <style>
        .container {
            display: grid;
            grid-template-columns: 50% 50%;
            grid-template-rows: auto;
            gap: 1em;
        }
        .sub-container {
            padding: 1.5em 2.5em;
        }

        .container img {
            width: 4em;
            height: 4em;
            padding: 1em 0.5em;
        }
        .icons {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
    </style>
`;

// skills-div
const skillsDivContent = 
`
    <h1 class="center-elements-inside">
        Skills
    </h1>

    <div class="container">
        <div class="column1 add-border-radius-with-bg">
            <h2 class="center-elements-inside">Technical Skills</h2>

            <!-- Development -->
            <div class="sub-container">
                <div class="head">
                    <img src="resources/Skills/technical skills/development.png" 
                    alt="">
                    <h2>
                        Development
                    </h2>
                </div>
                <ul>
                    <li>Proficient in OOP programming languages (C#, Java).</li>
                    <li>Proficient in compilers and foundational knowledge in interpreters.</li>
                </ul>
            </div>

            <!-- Database Management -->
            <div class="sub-container">
                <div class="head">
                    <img src="resources/Skills/technical skills/database management.png" 
                    alt="">
                    <h2>
                        Database Management
                    </h2>
                </div>
                <ul>
                    <li>Managing tables, columns and rows, and data.</li>
                    <li>Using Transact-SQL for database queries.</li>
                </ul>
            </div>

            <!-- System Administration -->
            <div class="sub-container">
                <div class="head">
                    <img src="resources/Skills/technical skills/system administration.png" 
                    alt="">
                    <h2>
                        System Administration
                    </h2>
                </div>
                <ul>
                    <li>Managing user accounts and permissions.</li>
                    <li>Familiarity with Active Directory.</li>
                </ul>
            </div>

            <!-- Operating Systems -->
            <div class="sub-container">
                <div class="head">
                    <img src="resources/Skills/technical skills/os.png" 
                    alt="">
                    <h2>
                        Operating Systems
                    </h2>
                </div>
                <ul>
                    <li>Proficient in Windows; foundational knowledge in macOS and Linux (Ubuntu, Fedora).</li>
                </ul>
            </div>

            <!-- Networking -->
            <div class="sub-container">
                <div class="head">
                    <img src="resources/Skills/technical skills/networking.png" 
                    alt="">
                    <h2>
                        Networking
                    </h2>
                </div>
                <ul>
                    <li>Understanding of LAN/WAN, DNS, DHCP, TCP/IP.</li>
                    <li>Basic router/switch configuration and Wi-Fi setup.</li>
                </ul>
            </div>

            <!-- Hardware Support -->
            <div class="sub-container">
                <div class="head">
                    <img src="resources/Skills/technical skills/hardware support.png" 
                    alt="">
                    <h2>
                        Hardware Support
                    </h2>
                </div>
                <ul>
                    <li>Basic installation and maintenance of computers, printers, and peripherals.</li>
                    <li>Component upgrades and familiarity in hardware diagnostics.</li>
                </ul>
            </div>

            <!-- Software Support -->
            <div class="sub-container">
                <div class="head">
                    <img src="resources/Skills/technical skills/software support.png" 
                    alt="">
                    <h2>
                        Software Support
                    </h2>
                </div>
                <ul>
                    <li>Familiarity with common applications like Microsoft Office, Google Workspace.</li>
                    <li>Installing, configuring, and updating software.</li>
                </ul>
            </div>

            <!-- Troubleshooting and Problem Solving -->
            <div class="sub-container">
                <div class="head">
                    <img src="resources/Skills/technical skills/troubleshooting.png" 
                    alt="">
                    <h2>
                        Troubleshooting and <br>Problem Solving 
                    </h2>
                </div>
                <ul>
                    <li>Diagnosing and resolving hardware and software issues.</li>
                    <li>Network connectivity troubleshooting.</li>
                </ul>
            </div>

            <!-- Cybersecurity Basics -->
            <div class="sub-container">
                <div class="head">
                    <img src="resources/Skills/technical skills/cybersecurity.png" 
                    alt="">
                    <h2>
                        Cybersecurity Basics
                    </h2>
                </div>
                <ul>
                    <li>Knowledge of antivirus software, firewalls, and data protection.</li>
                    <li>Understanding of secure practices, including password management.</li>
                </ul>
            </div>

            <!-- GitHub Proficiency -->
            <div class="sub-container">
                <div class="head">
                    <img src="resources/github-logo.png" 
                    alt="">
                    <h2>
                        GitHub Proficiency
                    </h2>
                </div>
                <ul>
                    <li>Used a project management app (GitHub Project Management) for the capstone project.</li>
                    <li>Uses GitHub Desktop application for managing repositories.</li>
                </ul>
            </div>

            <!-- Backup and Recovery -->
            <div class="sub-container">
                <div class="head">
                    <img src="resources/Skills/technical skills/backup and recovery.png" 
                    alt="">
                    <h2>
                        Backup and Recovery
                    </h2>
                </div>
                <ul>
                    <li>Implementing and managing backup solutions.</li>
                </ul>
            </div>

            <!-- Extra -->
            <div class="sub-container">
                <div class="head">
                    <img src="resources/Skills/learning.png" 
                    alt="">
                    <h2>
                        Learning...
                    </h2>
                </div>
                <ul>
                    <li>Obtaining more technical skills...</li>
                </ul>
            </div>
        </div>

        <div class="column2 add-border-radius-with-bg">
            <h2 class="center-elements-inside">Soft Skills</h2>

            <!-- Communication Skills -->
            <div class="sub-container">
                <div class="head">
                    <img src="resources/Skills/soft skills/communication.png" 
                    alt="">
                    <h2>
                        Communication Skills
                    </h2>
                </div>
                <ul>
                    <li>Explaining technical concepts in simple terms for non-technical users.</li>
                    <li>Active listening to understand user issues thoroughly.</li>
                </ul>
            </div>

            <!-- Leadership -->
            <div class="sub-container">
                <div class="head">
                    <img src="resources/Skills/soft skills/leadership.png" 
                    alt="">
                    <h2>
                        Leadership Skills
                    </h2>
                </div>
                <ul>
                    <li>Managed and lead the capstone project of IT Capstone 1 & 2 course.</li>
                </ul>
            </div>

            <!-- Teamwork and Collaboration -->
            <div class="sub-container">
                <div class="head">
                    <img src="resources/Skills/soft skills/teamwork.png" 
                    alt="">
                    <h2>
                        Teamwork and Collaboration
                    </h2>
                </div>
                <ul>
                    <li>Working with colleagues to solve problems.</li>
                    <li>Sharing knowledge and best practices within the team.</li>
                    <li>Illustrated a roadmap for the capstone team.</li>
                </ul>
            </div>

            <!-- Extra -->
            <div class="sub-container">
                <div class="head">
                    <img src="resources/Skills/learning.png" 
                    alt="">
                    <h2>
                        Learning
                    </h2>
                </div>
                <ul>
                    <li>Obtaining more soft skills...</li>
                </ul>
            </div>
        </div>

        <style>
            .container {
                display: grid;
                grid-template-columns: 50% 50%;
                grid-template-rows: auto;

                /* 
                    This [gap: 1em;] puts a gap between the two columns of the grid template, since 
                    there are only two grids (column-wise), it only creates a gap between the columns, 
                    hence it won't affect the gaps between the [.sub-container] classes.
                    Refer to [.column1, .column2] classes for more info.
                */
                gap: 1em;
            }
            .sub-container {
                padding: 1.5em 2.5em;
            }
            .column1, .column2 {
                display: flex;
                flex-direction: column;
                padding: 1.5em 0em;

                /* 
                    In here, since there's only one column, the [gap] property only affects the top and 
                    bottom gaps of the divs. Column-wise, there's only one column, so there's really 
                    nothing to put a gap on the left and right sides of the div.
                */
                gap: 1em;
            }

            .container img {
                width: 4em;
                height: 4em;
                padding: 1em 0.5em;
            }
            .head {
                display: flex;
                flex-wrap: wrap;
            }
        </style>
    </div>  
`;

// Used for content placeholder, so expanding tiles won't just be empty.
const placeholderDiv = 
`
    <div class="container center-elements-inside">
        <h1 class="content">
            Please wait, the content will be added soon; I am working on it! :D
        </h1>
    </div>
    

    <style>
        .container {
            height: 50vh;
        }
        .content {
            text-align: center;
            align-items: center;
            padding-top: 4em;
        }

    </style>
`;