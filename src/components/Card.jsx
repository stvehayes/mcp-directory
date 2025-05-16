import {
    ArrowRightIcon,
    GlobeIcon,
    LockIcon,
    StarIcon,
    VerifiedIcon,
} from '@primer/octicons-react'
import { Avatar, Box, Heading, Link, Text, Tooltip } from '@primer/react'
import { Link as RouterLink } from '../router'

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

function Card({
    name,
    description,
    stars,
    remote,
    internal,
    language,
    verified,
    src,
}) {
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
                        gap: '12px',
                        alignItems: 'center',
                        mb: '12px',
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
                            size={24}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        <Text as="h3" fontSize={2} sx={{ color: 'fg.default' }}>
                            {name}
                        </Text>
                        {verified && <VerifiedIcon />}
                    </Box>
                </Box>
                <Text
                    sx={{
                        height: '100%',
                    }}
                    color="fg.muted"
                >
                    {description}
                </Text>

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
                    <Box
                        sx={{
                            color: 'fg.muted',
                            display: 'flex',
                            gap: 3,
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                color: 'fg.muted',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                            <StarIcon />
                            <Text fontSize={1}>{stars}</Text>
                        </Box>
                        {remote && (
                            <Tooltip text="Remote available">
                                <GlobeIcon />
                            </Tooltip>
                        )}
                        {internal && (
                            <Tooltip text="Internal only">
                                <LockIcon />
                            </Tooltip>
                        )}
                    </Box>
                </Box>
            </Box>
        </Link>
    )
}

export default Card
