import { SearchIcon } from '@primer/octicons-react'
import { Box, Heading, Text, TextInput } from '@primer/react'

export default function Hero({ searchTerm, onSearchChange }) {
    const time = '8s'
    return (
        <Box
            sx={{
                bg: 'canvas.subtle',
                position: 'relative',
                borderBottom: '1px solid',
                borderColor: 'border.default',
                textAlign: 'center',
                mb: 8,
                px: 4,
                py: 10,
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E\")",
                    opacity: 0.06,
                    zIndex: 1,
                    pointerEvents: 'none',
                },
                '@keyframes float': {
                    '0%': {
                        transform: 'scale(1.3)',
                        opacity: 0.9,
                    },
                    '50%': {
                        transform: 'scale(0.5)',
                        opacity: 0.5,
                    },
                    '100%': {
                        transform: 'scale(1.3)',
                        opacity: 0.9,
                    },
                },
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    left: ['-500px', null, '-250px'],
                    bottom: '-400px',
                    width: '100%',
                    maxWidth: '500px',
                    height: '500px',
                    pointerEvents: 'none',
                    zIndex: 0,
                    opacity: 0.75,
                    borderRadius: '100%',
                    filter: 'blur(200px)',
                    bg: '#F586F3',
                    animation: `float ${time} cubic-bezier(0.65, 0, 0.35, 1) infinite`,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    right: ['-500px', null, '-250px'],
                    top: '-350px',
                    width: '100%',
                    maxWidth: '500px',
                    height: '500px',
                    pointerEvents: 'none',
                    border: '75px solid',
                    boxSizing: 'border-box',
                    borderColor: '#45E699',
                    zIndex: 0,
                    opacity: 0.9,
                    borderRadius: '100%',
                    filter: 'blur(120px)',
                    bg: 'done.emphasis',
                    animation: `float ${time} cubic-bezier(0.65, 0, 0.35, 1) infinite reverse`,
                }}
            />
            <Heading
                as="h1"
                sx={{
                    fontSize: [4, null, 5],
                    position: 'relative',
                    zIndex: 2,
                }}
                mb={2}
            >
                Connect models to the real world
            </Heading>
            <Text
                sx={{
                    fontSize: [2, null, 3],
                    color: 'fg.muted',
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                Servers and tools from the community that connect models to
                files, APIs, databases, and more.
            </Text>
            <Box sx={{ position: 'relative', zIndex: 2 }} mt={4}>
                <TextInput
                    size="large"
                    placeholder="Search"
                    leadingVisual={SearchIcon}
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    sx={{
                        minWidth: '300px',
                        maxWidth: '100%',
                    }}
                />
            </Box>
        </Box>
    )
}
