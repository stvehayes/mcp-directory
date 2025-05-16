import {
    Box,
    Text,
    Link,
    Octicon,
    Button,
    Heading,
    CounterLabel,
    ActionMenu,
    ActionList,
    PageLayout,
} from '@primer/react'
import { CheckIcon } from '@primer/octicons-react'
import Application from '../templates/Application/Application.jsx'
import styles from './overview.module.css'
import { useState } from 'react'

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
    SmileyIcon,
    PersonIcon,
    MentionIcon,
    HomeIcon,
} from '@primer/octicons-react'
import Hero from '../components/Hero.jsx'
import { featured, servers } from '../data/Data.js'
import Card from '../components/Card.jsx'
import FeaturedCard from '../components/FeaturedCard.jsx'
import SideNav from '../components/SideNav.jsx'

const topnav = [
    { icon: HomeIcon, label: 'Overview', url: '/', current: true },
    { icon: IssueOpenedIcon, label: 'Organizations', url: '#issues' },
    { icon: GitPullRequestIcon, label: 'People' },
    { icon: CommentDiscussionIcon, label: 'Policies' },
    { icon: PlayIcon, label: 'GitHub Connect' },
    { icon: ProjectIcon, label: 'Code Security', counter: 7 },
    { icon: ShieldIcon, label: 'Billing & Licensing', counter: 12 },
    { icon: GraphIcon, label: 'Settings' },
    { icon: GraphIcon, label: 'Compliance' },
]

const typeItems = [{ label: 'All' }, { label: 'Remote' }, { label: 'Local' }]

const visibilityItems = [
    { label: 'All' },
    { label: 'Public' },
    { label: 'Internal' },
]

const creatorItems = [{ label: 'All' }, { label: 'Official' }]

const sortItems = [{ label: 'Popularity' }, { label: 'Recently added' }]

function Directory() {
    const maxWidth = '1200px'
    const gridColumns = [
        'repeat(1, 1fr)',
        null,
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
    ]
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedTypeIndex, setSelectedTypeIndex] = useState(0)
    const [selectedVisibilityIndex, setSelectedVisibilityIndex] = useState(0)
    const [selectedCreatorIndex, setSelectedCreatorIndex] = useState(0)
    const [selectedSortIndex, setSelectedSortIndex] = useState(0)

    const filteredServers = servers.filter((server) =>
        server.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const filteredFeatured = featured.filter((server) =>
        server.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <Application title="MCP Directory">
            <Hero searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: ['column', null, 'row'],
                    gap: 7,
                    width: '100%',
                    margin: '0 auto',
                    justifyContent: 'center',
                    p: 4,
                }}
            >
                <Box sx={{ width: ['100%', null, 325], flexShrink: 0 }}>
                    <SideNav />
                </Box>
                <Box>
                    <Box sx={{ mb: 8, flex: 1 }}>
                        <Box
                            sx={{
                                maxWidth: maxWidth,
                                margin: '0 auto',
                                display: 'flex',
                                justifyContent: 'space-between',
                                mb: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    mb: 3,
                                }}
                            >
                                <Heading sx={{ fontSize: 3 }}>Featured</Heading>
                                <Text sx={{ color: 'fg.muted' }}>
                                    The most used MCP's on GitHub
                                </Text>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                maxWidth: maxWidth,
                                margin: '0 auto',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: gridColumns,
                                    gap: 3,
                                }}
                            >
                                {filteredFeatured.map((server) => (
                                    <FeaturedCard
                                        key={server.name}
                                        {...server}
                                        verified
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            maxWidth: maxWidth,
                            margin: '0 auto',
                            display: 'flex',
                            flexDirection: ['column', null, 'row'],
                            mb: [3, null, 0],
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                                mb: 3,
                            }}
                        >
                            <Heading sx={{ fontSize: 3 }}>MCP servers</Heading>
                            <CounterLabel
                                sx={{
                                    alignSelf: 'center',
                                }}
                            >
                                {filteredServers.length}
                            </CounterLabel>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                            }}
                        >
                            <ActionMenu>
                                <ActionMenu.Button>
                                    <Text
                                        as="span"
                                        sx={{
                                            fontWeight: 'inherit',
                                            color: 'fg.muted',
                                        }}
                                    >
                                        Type:
                                    </Text>{' '}
                                    {typeItems[selectedTypeIndex].label}
                                </ActionMenu.Button>
                                <ActionMenu.Overlay>
                                    <ActionList
                                        selectionVariant="single"
                                        role="menu"
                                        aria-label="Type"
                                    >
                                        {typeItems.map((item, index) => (
                                            <ActionList.Item
                                                key={index}
                                                role="menuitemradio"
                                                selected={
                                                    index === selectedTypeIndex
                                                }
                                                aria-checked={
                                                    index === selectedTypeIndex
                                                }
                                                onSelect={() =>
                                                    setSelectedTypeIndex(index)
                                                }
                                            >
                                                {item.label}
                                            </ActionList.Item>
                                        ))}
                                    </ActionList>
                                </ActionMenu.Overlay>
                            </ActionMenu>

                            <ActionMenu>
                                <ActionMenu.Button>
                                    <Text
                                        as="span"
                                        sx={{
                                            fontWeight: 'inherit',
                                            color: 'fg.muted',
                                        }}
                                    >
                                        Visibility:
                                    </Text>{' '}
                                    {
                                        visibilityItems[selectedVisibilityIndex]
                                            .label
                                    }
                                </ActionMenu.Button>
                                <ActionMenu.Overlay>
                                    <ActionList
                                        selectionVariant="single"
                                        role="menu"
                                        aria-label="Visibility"
                                    >
                                        {visibilityItems.map((item, index) => (
                                            <ActionList.Item
                                                key={index}
                                                role="menuitemradio"
                                                selected={
                                                    index ===
                                                    selectedVisibilityIndex
                                                }
                                                aria-checked={
                                                    index ===
                                                    selectedVisibilityIndex
                                                }
                                                onSelect={() =>
                                                    setSelectedVisibilityIndex(
                                                        index
                                                    )
                                                }
                                            >
                                                {item.label}
                                            </ActionList.Item>
                                        ))}
                                    </ActionList>
                                </ActionMenu.Overlay>
                            </ActionMenu>

                            <ActionMenu>
                                <ActionMenu.Button>
                                    <Text
                                        as="span"
                                        sx={{
                                            fontWeight: 'inherit',
                                            color: 'fg.muted',
                                        }}
                                    >
                                        Creator:
                                    </Text>{' '}
                                    {creatorItems[selectedCreatorIndex].label}
                                </ActionMenu.Button>
                                <ActionMenu.Overlay>
                                    <ActionList
                                        selectionVariant="single"
                                        role="menu"
                                        aria-label="Creator"
                                    >
                                        {creatorItems.map((item, index) => (
                                            <ActionList.Item
                                                key={index}
                                                role="menuitemradio"
                                                selected={
                                                    index ===
                                                    selectedCreatorIndex
                                                }
                                                aria-checked={
                                                    index ===
                                                    selectedCreatorIndex
                                                }
                                                onSelect={() =>
                                                    setSelectedCreatorIndex(
                                                        index
                                                    )
                                                }
                                            >
                                                {item.label}
                                            </ActionList.Item>
                                        ))}
                                    </ActionList>
                                </ActionMenu.Overlay>
                            </ActionMenu>

                            <ActionMenu>
                                <ActionMenu.Button>
                                    <Text
                                        as="span"
                                        sx={{
                                            fontWeight: 'inherit',
                                            color: 'fg.muted',
                                        }}
                                    >
                                        Sort:
                                    </Text>{' '}
                                    {sortItems[selectedSortIndex].label}
                                </ActionMenu.Button>
                                <ActionMenu.Overlay>
                                    <ActionList
                                        selectionVariant="single"
                                        role="menu"
                                        aria-label="Sort"
                                    >
                                        {sortItems.map((item, index) => (
                                            <ActionList.Item
                                                key={index}
                                                role="menuitemradio"
                                                selected={
                                                    index === selectedSortIndex
                                                }
                                                aria-checked={
                                                    index === selectedSortIndex
                                                }
                                                onSelect={() =>
                                                    setSelectedSortIndex(index)
                                                }
                                            >
                                                {item.label}
                                            </ActionList.Item>
                                        ))}
                                    </ActionList>
                                </ActionMenu.Overlay>
                            </ActionMenu>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            maxWidth: maxWidth,
                            margin: '0 auto',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: gridColumns,
                                gap: 3,
                            }}
                        >
                            {filteredServers.map((server) => (
                                <Card key={server.name} {...server} />
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Application>
    )
}

export default Directory
