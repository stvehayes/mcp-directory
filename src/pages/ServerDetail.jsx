import React from 'react'
import {
    Box,
    Heading,
    Text,
    CounterLabel,
    Label,
    Avatar,
    Button,
    Link as PrimerLink,
} from '@primer/react'
import { StarFillIcon } from '@primer/octicons-react'
import GlobalNavigation from '../components/GlobalNavigation.jsx'

export default function ServerDetail({ server }) {
    if (!server) return <Text>Server not found.</Text>
    return (
        <Box sx={{ bg: 'canvas.default' }}>
            <GlobalNavigation
                title={
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2,
                            alignItems: 'center',
                        }}
                    >
                        <PrimerLink
                            href="/"
                            sx={{
                                fontWeight: 600,
                                color: 'inherit',
                                textDecoration: 'none',
                                '&:hover': { textDecoration: 'underline' },
                            }}
                        >
                            MCP Directory
                        </PrimerLink>
                        <Text sx={{ color: 'fg.muted' }}>/</Text>
                        <Text as="span" sx={{ fontWeight: 'bold' }}>
                            {server.name}
                        </Text>
                    </Box>
                }
                subtitle={null}
            />
            <Box sx={{ maxWidth: 800, mx: 'auto', mt: 6, p: 4 }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        mb: 4,
                    }}
                >
                    <Avatar src={server.src} size={64} alt={server.name} />
                    <Box>
                        <Heading as="h1" sx={{ mb: 1 }}>
                            {server.name}{' '}
                            {server.verified && (
                                <Label variant="success" sx={{ ml: 2 }}>
                                    Verified
                                </Label>
                            )}
                        </Heading>
                        <Text sx={{ color: 'fg.muted' }}>
                            {server.description}
                        </Text>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        mb: 3,
                    }}
                >
                    <Label>{server.language}</Label>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <StarFillIcon size={16} />
                        <Text>{server.stars}</Text>
                    </Box>
                    {server.remote && <Label variant="accent">Remote</Label>}
                    {server.internal && (
                        <Label variant="attention">Internal</Label>
                    )}
                    <Label>{server.category}</Label>
                </Box>
                <Button variant="primary" sx={{ mb: 4 }}>
                    Install server
                </Button>
                <Box
                    sx={{
                        border: '1px solid',
                        borderColor: 'border.default',
                        borderRadius: 2,
                        p: 3,
                        bg: 'canvas.subtle',
                        mb: 4,
                    }}
                >
                    <Heading as="h2" sx={{ fontSize: 2, mb: 2 }}>
                        README
                    </Heading>
                    <Text>
                        This is a placeholder README section. Here you can
                        display documentation, usage instructions, or other
                        relevant information for this server.
                    </Text>
                </Box>
                <Box>
                    <Text as="span" sx={{ color: 'fg.muted', fontSize: 1 }}>
                        Last updated 2 days ago · MIT License · Typescript
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}
