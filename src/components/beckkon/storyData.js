import {
    IdCard, RadioTower, LayoutDashboard, Bell, Server, Boxes,
    Cpu, Braces, Cloud, Database, Workflow,
    Users, Layers, Coins, Shield, Zap,
    Target, Eye, Link2, Binary,
} from 'lucide-react';

/* ─── 01 — The Beginning ─────────────────────────────────── */
export const BEGINNING = {
    name: 'Beckkon Systems',
    role: 'Founder & CEO — My First Venture',
    period: 'June 2026 – Present',
    body: 'Beckkon Systems is my first venture, where I work across technology, product development, business strategy and execution to build technology-driven solutions for real-world organizations.',
    facts: [
        { label: 'Role', value: 'Founder & CEO' },
        { label: 'Focus', value: 'My first venture' },
        { label: 'Period', value: 'June 2026 – Present' },
    ],
};

/* ─── 02 — The Problem ───────────────────────────────────── */
export const PROBLEM = {
    statement: 'Organizations often operate across disconnected systems, devices and workflows.',
    islands: [
        { label: 'Systems', icon: Server },
        { label: 'Devices', icon: Cpu },
        { label: 'Workflows', icon: Workflow },
    ],
    bridgeLabel: 'Making it difficult to',
    consequences: [
        { label: 'Real-Time Visibility', icon: Eye },
        { label: 'Coordinating Operations', icon: Link2 },
        { label: 'Connecting Physical Environments With Digital Systems', icon: RadioTower },
        { label: 'Turning Operational Data Into Useful Decisions', icon: Binary },
    ],
    close: 'Beckkon was started around the idea of creating a connected digital infrastructure layer for organizations.',
};

/* ─── 03 — The Solution ──────────────────────────────────── */
export const SOLUTION = {
    lead: 'Beckkon builds connected technology systems that bring together:',
    pillars: [
        { label: 'Hardware', icon: Cpu },
        { label: 'IoT', icon: RadioTower },
        { label: 'Software', icon: Braces },
        { label: 'Cloud Infrastructure', icon: Cloud },
        { label: 'Data', icon: Database },
        { label: 'Automation', icon: Workflow },
    ],
    goal: 'The goal is to connect the physical and digital worlds and provide organizations with better operational visibility, intelligence and control.',
    flow: ['Physical World', 'Connected Devices', 'Data & Cloud', 'Intelligence', 'Applications'],
};

/* ─── 04 — What We Built ─────────────────────────────────── */
export const BUILT = [
    {
        code: '01',
        title: 'Smart ID Card & Student Tracking',
        desc: 'Connected wearable hardware designed for real-time student visibility and tracking.',
        icon: IdCard,
    },
    {
        code: '02',
        title: 'IoT Gateways & Connected Infrastructure',
        desc: 'Hardware and connectivity systems that connect physical environments with digital platforms.',
        icon: RadioTower,
    },
    {
        code: '03',
        title: 'Smart Campus Platform',
        desc: 'A software platform for student tracking, attendance, monitoring, alerts, geofencing, analytics and school operations.',
        icon: LayoutDashboard,
    },
    {
        code: '04',
        title: 'Parent & Teacher Applications',
        desc: 'Connected applications for communication, notifications, attendance and real-time information.',
        icon: Bell,
    },
    {
        code: '05',
        title: 'Cloud & Data Infrastructure',
        desc: 'Backend systems, dashboards, data pipelines and infrastructure supporting connected operations.',
        icon: Server,
    },
    {
        code: '06',
        title: 'Digital Twin & Intelligent Dashboards',
        desc: 'Interactive digital systems for visualizing real-world environments and operational data.',
        icon: Boxes,
    },
];

/* ─── 05 — Innovation ────────────────────────────────────── */
export const INNOVATION = {
    lead: 'The innovation comes from combining the physical and digital sides of an organization into one connected system.',
    note: 'Beckkon has worked on both the physical products and the software platforms needed to make the system work end-to-end.',
    chain: [
        'Hardware', 'IoT', 'Connectivity', 'Cloud',
        'Software Platform', 'Data', 'Intelligence', 'Real-World Action',
    ],
    areasLabel: 'Built products and software platforms across',
    areas: [
        'Connected Hardware',
        'IoT Systems',
        'Student Tracking',
        'Smart Campus Technology',
        'Software Platforms',
        'Cloud Infrastructure',
        'Digital Dashboards',
        'Digital Twin Visualization',
        'Automation',
    ],
};

/* ─── 06 — The Team ──────────────────────────────────────── */
export const TEAM = {
    note: 'Beckkon is built by a team connected with IIT (BHU), with Prof. Manoj Kumar Meshram supporting the venture as an Advisor & Mentor.',
    members: [
        {
            initials: 'SK',
            name: 'Saurabh Kumar',
            role: 'Founder & CEO',
            affiliation: ['IIT (BHU) — Engineering Physics'],
            variant: 'founder',
        },
        {
            initials: 'AV',
            name: 'Aditya Verma',
            role: 'Co-Founder',
            affiliation: ['IIT (BHU) — Engineering Physics'],
        },
        {
            initials: 'SK',
            name: 'Sachin Kumar',
            role: 'Co-Founder & Technical Head',
            affiliation: ['IIT (BHU)'],
        },
        {
            initials: 'MM',
            name: 'Prof. Manoj Kumar Meshram',
            role: 'Advisor & Mentor',
            affiliation: ['Professor, Department of Electronics Engineering', 'IIT (BHU), Varanasi'],
            variant: 'advisor',
        },
    ],
};

/* ─── 07 — Leadership & Traction ─────────────────────────── */
export const TRACTION = {
    /* scale keeps long values (IIT (BHU), End-to-End) from overflowing
       their grid column next to short ones (15+, 50+). */
    metrics: [
        { value: '15+', label: 'Core Team Members', icon: Users, scale: 'xl' },
        { value: '50+', label: 'Interns Coordinated', icon: Layers, scale: 'xl' },
        { value: '₹2 Cr', label: 'Early-Stage Traction', icon: Coins, scale: 'md' },
        { value: 'IIT (BHU)', label: 'Incubation', icon: Shield, scale: 'sm' },
        { value: 'End-to-End', label: 'Leadership', icon: Zap, scale: 'sm' },
    ],
    note: 'Led product development, team building, business strategy, partnerships, financial planning and execution from the early stage of the venture.',
};

/* ─── 08 — Explore Beckkon ───────────────────────────────── */
export const EXPLORE = {
    lead: 'Visit the venture:',
    links: [
        { label: 'Beckkon', url: 'https://beckkon.com/' },
        { label: 'School Platform', url: 'https://school.beckkon.com/' },
    ],
};

export const SECTIONS = [
    { index: '01', title: 'The Beginning' },
    { index: '02', title: 'The Problem' },
    { index: '03', title: 'The Solution' },
    { index: '04', title: 'What We Built' },
    { index: '05', title: 'Innovation' },
    { index: '06', title: 'The Team' },
    { index: '07', title: 'Leadership & Traction' },
    { index: '08', title: 'Explore Beckkon' },
];

export const STORY_INTRO_ICON = Target;
