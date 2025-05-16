import { UnderlineNav, Box, IconButton, Text } from '@primer/react'
import ColorModeSwitcher from './ColorModeSwitcher'
import {
    IssueOpenedIcon,
    ThreeBarsIcon,
    CodeIcon,
    GitPullRequestIcon,
    CommentDiscussionIcon,
    ShieldIcon,
    PlayIcon,
    ProjectIcon,
    GraphIcon,
    MarkGithubIcon,
} from '@primer/octicons-react'

const defaultNav = [
    { icon: CodeIcon, label: 'Code', current: true },
    { icon: IssueOpenedIcon, label: 'Issues', counter: 30 },
    { icon: GitPullRequestIcon, label: 'Pull Requests', counter: 3 },
    { icon: CommentDiscussionIcon, label: 'Discussions' },
    { icon: PlayIcon, label: 'Actions' },
    { icon: ProjectIcon, label: 'Projects', counter: 7 },
    { icon: ShieldIcon, label: 'Security', counter: 12 },
    { icon: GraphIcon, label: 'Insights' },
]

export default function GlobalNavigation({
    items = defaultNav,
    title,
    subtitle,
}) {
    return (
        <Box
            as="header"
            sx={{
                borderBottom: '1px solid',
                borderColor: 'border.default',
                bg: 'canvas.inset',
                width: '100%',
                maxWidth: '100%',
            }}
        >
            <Box
                sx={{
                    p: 3,
                    display: 'flex',
                    gap: 3,
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: 3,
                        alignItems: 'center',
                        flex: 1,
                    }}
                >
                    <IconButton
                        icon={ThreeBarsIcon}
                        aria-label="Open global navigation menu"
                        unsafeDisableTooltip
                    />
                    <MarkGithubIcon size={32} />
                    <Box sx={{ display: 'flex', gap: 2, fontSize: 1 }}>
                        <Text as="span" sx={{ fontWeight: 600 }}>
                            {title ? title : 'title'}
                        </Text>
                        {subtitle && (
                            <>
                                <Text sx={{ color: 'fg.muted' }}>/</Text>
                                <Text sx={{ fontWeight: 'bold' }}>
                                    {subtitle ? subtitle : 'subtitle'}
                                </Text>
                            </>
                        )}
                    </Box>
                </Box>
                <ColorModeSwitcher />
            </Box>
        </Box>
    )
}
