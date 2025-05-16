import React from 'react'
import { Box } from '@primer/react'
import GlobalNavigation from '../../components/GlobalNavigation.jsx'
import SidebarNavigation from '../../components/SidebarNavigation.jsx'

import styles from './application.module.css'

function Application({ children, title, subtitle, topnav, sidenav }) {
    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: 'var(--bgColor-default)',
                pb: 8,
                minHeight: '100vh',
            }}
        >
            <GlobalNavigation title={title} subtitle={subtitle} />
            <div className={styles.wrapper}>
                {sidenav && (
                    <aside className={styles.navigation}>
                        <SidebarNavigation sidenav={sidenav} />
                    </aside>
                )}
                <main
                    sx={{
                        width: '100%',
                    }}
                    className={styles.main}
                >
                    {children}
                </main>
            </div>
        </Box>
    )
}

export default Application
