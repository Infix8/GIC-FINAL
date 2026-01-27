import React from 'react';
import { Link } from '@tanstack/react-router';
import { Box, Container, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Footer: React.FC = () => {
    const theme = useTheme();
    
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'background.default',
                borderTop: `1px solid ${theme.palette.primary.main}1A`, // 10% opacity
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="xl" sx={{ py: 1.5, position: 'relative', zIndex: 10 }}>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    alignItems={{ md: 'center' }}
                    justifyContent={{ md: 'space-between' }}
                    spacing={2}
                >
                    {/* Copyright */}
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'text.secondary',
                            fontSize: '0.875rem',
                        }}
                    >
                        © 2026 St. Martin's Engineering College. All rights reserved.
                    </Typography>

                    {/* Legal Links */}
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Link
                            to="/terms"
                            style={{ textDecoration: 'none' }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'text.secondary',
                                    fontSize: '0.875rem',
                                    '&:hover': {
                                        color: 'primary.main',
                                    },
                                    transition: 'color 0.2s ease',
                                }}
                            >
                                *Terms & Conditions
                            </Typography>
                        </Link>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'text.secondary',
                                opacity: 0.5,
                            }}
                        >
                            |
                        </Typography>
                        <Link
                            to="/privacy"
                            style={{ textDecoration: 'none' }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'text.secondary',
                                    fontSize: '0.875rem',
                                    '&:hover': {
                                        color: 'primary.main',
                                    },
                                    transition: 'color 0.2s ease',
                                }}
                            >
                                Privacy Policy
                            </Typography>
                        </Link>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'text.secondary',
                                opacity: 0.5,
                            }}
                        >
                            |
                        </Typography>
                        <Link
                            to="/refund"
                            style={{ textDecoration: 'none' }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'text.secondary',
                                    fontSize: '0.875rem',
                                    '&:hover': {
                                        color: 'primary.main',
                                    },
                                    transition: 'color 0.2s ease',
                                }}
                            >
                                Refund Policy
                            </Typography>
                        </Link>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
