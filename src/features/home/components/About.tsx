import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

const About: React.FC = () => {
    return (
        <Box
            component="section"
            id="about"
            sx={{
                py: { xs: 5, sm: 8, md: 10, lg: 12 },
                background: 'var(--color-bg-primary)',
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    px: { xs: 2, sm: 3, md: 4, lg: 5 },
                    width: '100%',
                    maxWidth: '100%',
                }}
            >
                {/* Section Title */}
                <Box sx={{ mb: { xs: 4, sm: 5, md: 6, lg: 8 } }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontFamily: 'var(--font-display)',
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3.5rem' },
                            fontWeight: 700,
                            color: 'text.primary',
                            letterSpacing: '-0.02em',
                            wordWrap: 'break-word',
                            overflowWrap: 'break-word',
                        }}
                    >
                        ABOUT THE CONCLAVE
                    </Typography>
                </Box>

                {/* Row by Row Horizontal Layout */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: { xs: 3, sm: 4, md: 5, lg: 6 },
                        width: '100%',
                    }}
                >
                    {/* Row 1: Mission (01) */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: { xs: 'flex-start', sm: 'flex-start' },
                            gap: { xs: 1.5, sm: 2, md: 3, lg: 4 },
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3.5rem' },
                                color: 'var(--color-accent)',
                                fontWeight: 700,
                                fontFamily: 'var(--font-display)',
                                flexShrink: 0,
                                lineHeight: 1,
                            }}
                        >
                            01
                        </Box>
                        <Box sx={{ 
                            flex: 1, 
                            display: 'flex', 
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: { xs: 'flex-start', sm: 'baseline' },
                            flexWrap: 'wrap',
                            gap: { xs: 0.5, sm: 1 },
                            width: '100%',
                            minWidth: 0,
                        }}>
                            <Typography
                                component="span"
                                sx={{
                                    fontSize: { xs: '0.6875rem', sm: '0.75rem', md: '0.875rem', lg: '1rem' },
                                    fontWeight: 700,
                                    color: 'text.primary',
                                    fontFamily: 'var(--font-primary)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    whiteSpace: { xs: 'normal', sm: 'nowrap' },
                                    mb: { xs: 0.5, sm: 0 },
                                }}
                            >
                                Mission:
                            </Typography>
                            <Typography
                                component="span"
                                sx={{
                                    fontSize: { xs: '0.8125rem', sm: '0.875rem', md: '0.9375rem', lg: '1rem' },
                                    lineHeight: 1.7,
                                    color: 'text.secondary',
                                    fontFamily: 'var(--font-primary)',
                                    wordWrap: 'break-word',
                                    overflowWrap: 'break-word',
                                    width: '100%',
                                }}
                            >
                                The primary mission of <Box component="span" sx={{ fontWeight: 600, color: 'var(--color-accent)' }}>SMEC's Global Innovators Conclave 2026</Box> is to foster <Box component="span" sx={{ fontWeight: 600 }}>deep-tech innovation and entrepreneurship</Box> by creating a robust ecosystem that connects high-potential teams with funding opportunities, expert mentorship, and strategic industry partnerships.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Row 2: Vision (02) */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: { xs: 'flex-start', sm: 'flex-start' },
                            gap: { xs: 1.5, sm: 2, md: 3, lg: 4 },
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3.5rem' },
                                color: 'var(--color-accent)',
                                fontWeight: 700,
                                fontFamily: 'var(--font-display)',
                                flexShrink: 0,
                                lineHeight: 1,
                            }}
                        >
                            02
                        </Box>
                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%', minWidth: 0 }}>
                            <Typography
                                sx={{
                                    fontSize: { xs: '0.6875rem', sm: '0.75rem', md: '0.875rem', lg: '1rem' },
                                    fontWeight: 700,
                                    mb: { xs: 0.75, sm: 1, md: 1.5 },
                                    color: 'text.primary',
                                    fontFamily: 'var(--font-primary)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                Vision:
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: '0.8125rem', sm: '0.875rem', md: '0.9375rem', lg: '1rem' },
                                    lineHeight: 1.7,
                                    color: 'text.secondary',
                                    fontFamily: 'var(--font-primary)',
                                    wordWrap: 'break-word',
                                    overflowWrap: 'break-word',
                                }}
                            >
                                To make campus innovation a <Box component="span" sx={{ fontWeight: 600, color: 'var(--color-accent)' }}>launchpad</Box> that strengthens India's Deep-tech ecosystem and scales ideas to the world.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Row 3: Objectives (03) */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: { xs: 'flex-start', sm: 'flex-start' },
                            gap: { xs: 1.5, sm: 2, md: 3, lg: 4 },
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3.5rem' },
                                color: 'var(--color-accent)',
                                fontWeight: 700,
                                fontFamily: 'var(--font-display)',
                                flexShrink: 0,
                                lineHeight: 1,
                            }}
                        >
                            03
                        </Box>
                        <Box sx={{ flex: 1, width: '100%', minWidth: 0 }}>
                            <Typography
                                sx={{
                                    fontSize: { xs: '0.6875rem', sm: '0.75rem', md: '0.875rem', lg: '1rem' },
                                    fontWeight: 700,
                                    mb: { xs: 1.25, sm: 1.5, md: 2 },
                                    color: 'text.primary',
                                    fontFamily: 'var(--font-primary)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                Objectives:
                            </Typography>
                            <Box
                                component="ul"
                                sx={{
                                    fontSize: { xs: '0.8125rem', sm: '0.875rem', md: '0.9375rem', lg: '1rem' },
                                    lineHeight: 1.8,
                                    color: 'text.secondary',
                                    fontFamily: 'var(--font-primary)',
                                    pl: { xs: 1.75, sm: 2, md: 2.5 },
                                    m: 0,
                                    wordWrap: 'break-word',
                                    overflowWrap: 'break-word',
                                    '& li': {
                                        mb: { xs: 0.875, sm: 1, md: 1.25 },
                                        listStyleType: 'none',
                                        position: 'relative',
                                        pl: { xs: 1.25, sm: 1.5, md: 2 },
                                        wordWrap: 'break-word',
                                        overflowWrap: 'break-word',
                                        '&::before': {
                                            content: '"•"',
                                            position: 'absolute',
                                            left: 0,
                                            color: 'var(--color-accent)',
                                            fontWeight: 'bold',
                                            fontSize: { xs: '1.1em', sm: '1.2em' },
                                        },
                                    },
                                }}
                            >
                                <li>Foster Innovation and Entrepreneurship culture</li>
                                <li>Promote Deep-Tech and Problem-Driven Innovation</li>
                                <li>Connect talent with incubators & global industry</li>
                                <li>Enable mentorship and market access</li>
                                <li>Contribute to India's innovation leadership</li>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default About;

