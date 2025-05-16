import { ArrowRightIcon, StarIcon, VerifiedIcon } from '@primer/octicons-react'
import { Avatar, Box, Heading, Link, Text } from '@primer/react'

function slugify(str) {
    return str
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
}

const linkStyle = {
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'none',
    },
}

function FeaturedCard({ name, description, verified, src, language, stars }) {
    return (
        <Link sx={linkStyle} href={`/server/${slugify(name)}`}>
            <Box
                sx={{
                    textDecoration: 'none',
                    width: '100%',
                    p: 3,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'border.default',
                    bg: 'canvas.default',
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: 'shadow.small',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                        boxShadow: 'shadow.medium',
                    },
                    '&:hover .arrow-icon': {
                        opacity: 1,
                        transform: 'translateX(0)',
                    },
                }}
            >
                <Box
                    className="arrow-icon"
                    sx={{
                        position: 'absolute',
                        top: 2,
                        right: 3,
                        transform: 'translateX(10px)',
                        opacity: 0,
                        transition: 'transform 0.2s ease, opacity 0.2s ease',
                        color: 'fg.muted',
                    }}
                >
                    <ArrowRightIcon />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 3,
                        mb: '12px',
                        height: '100%',
                    }}
                >
                    <Box>
                        <Avatar
                            square
                            src={
                                src ||
                                'https://avatars.githubusercontent.com/u/92997159?v=4'
                            }
                            alt={`${name} avatar`}
                            size={40}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'inline-flex',
                            gap: 1,
                            alignItems: 'center',
                        }}
                    >
                        <Text as="h3" fontSize={2} sx={{ color: 'fg.default' }}>
                            {name}
                        </Text>
                        {verified && <VerifiedIcon />}
                    </Box>
                    <Text
                        sx={{
                            height: '100%',
                            textAlign: 'center',
                        }}
                        color="fg.muted"
                    >
                        {description}
                    </Text>
                </Box>

                <Box
                    fontSize={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    mt={3}
                >
                    <Box display="flex" alignItems="center">
                        <Box
                            width="8px"
                            height="8px"
                            borderRadius="50%"
                            bg="accent.emphasis"
                            mr={2}
                        />
                        <Text sx={{ color: 'fg.muted' }} fontSize={1}>
                            {language}
                        </Text>
                    </Box>
                    <Box sx={{ color: 'fg.muted' }}>
                        <StarIcon />
                        <Text fontSize={1} ml={2}>
                            {stars}
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Link>
    )
}

export default FeaturedCard
