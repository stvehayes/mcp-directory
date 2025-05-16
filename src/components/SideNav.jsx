import React from 'react'
import { Box, CounterLabel, NavList, Text } from '@primer/react'
import { sideNav } from '../data/Data'

export default function SideNav() {
    return (
        <NavList>
            {sideNav.map((item, index) => (
                <NavList.Item
                    key={item.name}
                    href="#"
                    aria-current={index === 0 ? 'page' : undefined}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Text sx={{ flex: 1 }}>{item.name}</Text>
                        <CounterLabel>{item.count}</CounterLabel>
                    </Box>
                </NavList.Item>
            ))}
        </NavList>
    )
}
