import React from 'react';
import { Box, Container, Typography, Stack, Grid, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const About: React.FC = () => {
    const theme = useTheme();
    
    return (
        <Box
            component="section"
            id="about"
            className="flowing-bg flowing-bg-about"
            sx={{
                py: { xs: 3, sm: 4, md: 5 },
                background: 'var(--color-bg-primary)',
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    maxWidth: { xs: '100%', sm: '95%', md: '90%', lg: '85%', xl: '75%' },
                    mx: 'auto',
                    px: { xs: 2, sm: 3, md: 4 },
                }}
            >
                {/* Section header */}
                <Box sx={{ mb: { xs: 4, sm: 5, md: 6 } }}>
                    <Typography
                        variant="h2"
                        className="about-title"
                        sx={{
                            fontFamily: 'var(--font-display)',
                            fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem', lg: '3.5rem' },
                            fontWeight: 700,
                            mt: 0.5,
                            color: 'text.primary',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        ABOUT THE CONCLAVE
                    </Typography>
                </Box>

                <Stack spacing={{ xs: 3, sm: 4 }} className="about-content">
                    {/* Mission statement - large text */}
                    <div
                        className="about-block p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl card-hover-effect"
                        style={{
                            background: 'var(--color-bg-secondary)',
                            border: '1px solid rgba(139, 123, 181, 0.15)',
                            fontFamily: 'var(--font-primary)',
                        }}
                    >
                        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 sm:mb-3" style={{ color: 'var(--color-accent)' }}>Mission</h3>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-justify w-full" style={{ color: 'var(--color-text-primary)' }}>
                            The primary mission of <span style={{ fontWeight: 600, color: 'var(--color-accent)' }}>SMEC’s Global Innovators Conclave 2026</span> is to foster <span style={{ fontWeight: 600 }}>deep-tech innovation and entrepreneurship</span> by creating a robust ecosystem that connects high-potential teams with funding opportunities, expert mentorship, and strategic industry partnerships.
                        </p>
                    </div>

                    {/* Info cards */}
                    <Grid container spacing={{ xs: 2, sm: 3 }}>
                        <Grid item xs={12} md={6}>
                            <Paper
                                className="about-block card-hover-effect"
                                sx={{
                                    p: { xs: 2, sm: 2.5, md: 3 },
                                    borderRadius: { xs: 2, sm: 3 },
                                    bgcolor: 'var(--color-bg-secondary)',
                                    border: '1px solid rgba(139, 123, 181, 0.15)',
                                    fontFamily: 'var(--font-primary)',
                                    '&:hover': {
                                        borderColor: 'var(--color-accent)',
                                        background: 'rgba(139, 123, 181, 0.08)',
                                        transition: 'all 0.3s ease',
                                    },
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: { xs: '1rem', sm: '1.125rem' },
                                        fontWeight: 600,
                                        mt: 0.5,
                                        color: 'text.primary',
                                        fontFamily: 'var(--font-primary)',
                                    }}
                                >
                                    Vision
                                </Typography>
                                <Typography
                                    sx={{
                                        mt: 0.5,
                                        fontSize: { xs: '0.875rem', sm: '1rem' },
                                        color: 'text.secondary',
                                        fontFamily: 'var(--font-primary)',
                                    }}
                                >
                                    To make campus innovation a <Box component="span" sx={{ color: 'var(--color-accent)', fontWeight: 600 }}>launchpad</Box> that strengthens India's Deep-tech ecosystem and scales ideas to the world.
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Paper
                                className="about-block card-hover-effect"
                                sx={{
                                    p: { xs: 2, sm: 2.5, md: 3 },
                                    borderRadius: { xs: 2, sm: 3 },
                                    bgcolor: 'var(--color-bg-secondary)',
                                    border: '1px solid rgba(139, 123, 181, 0.15)',
                                    fontFamily: 'var(--font-primary)',
                                    '&:hover': {
                                        borderColor: 'var(--color-accent)',
                                        background: 'rgba(139, 123, 181, 0.08)',
                                        transition: 'all 0.3s ease',
                                    },
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: { xs: '1rem', sm: '1.125rem' },
                                        fontWeight: 600,
                                        mt: 0.5,
                                        color: 'text.primary',
                                        fontFamily: 'var(--font-primary)',
                                    }}
                                >
                                    Objectives
                                </Typography>
                                <Box
                                    component="ul"
                                    sx={{
                                        mt: 0.5,
                                        spacing: { xs: 0.75, sm: 1 },
                                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                                        color: 'text.secondary',
                                        pl: 2,
                                        fontFamily: 'var(--font-primary)',
                                        '& li': {
                                            mb: { xs: 0.75, sm: 1 },
                                        },
                                    }}
                                >
                                    <li>Foster Innovation and Entrepreneurship culture</li>
                                    <li>Promote Deep-Tech and Problem-Driven Innovation</li>
                                    <li>Connect talent with incubators & global industry</li>
                                    <li>Enable mentorship and market access</li>
                                    <li>Contribute to India's innovation leadership</li>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Box>
    );
};

export default About;

