import React, { ComponentProps, MouseEvent, ReactElement, useCallback, useMemo, useState } from 'react';

interface Tab {
  name: string
  icon: ReactElement
  content: ReactElement
}

export interface TabContentProps extends ComponentProps<'div'> {
  tabs: Tab[]
}

export default function TabContent(Props: TabContentProps) {
  const { tabs, ...props } = Props
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0)

  const [headerContent, content] = useMemo(() => {
    function toHeaderLi(tab: Tab, i: number) {
      return (
        <li key={i} data-index={i} className={i === activeTabIndex ? 'active' : null}>
          <span className="icon">{tab.icon}</span>
          <span className="text">{tab.name}</span>
        </li>
      )
    }

    function toContent(tab: Tab, i: number) {
      return (
        <div key={i}>
          {tab.content}
        </div>
      )
    }
    const tabHeaderContent = tabs.map(toHeaderLi)
    const tabContent = tabs.map(toContent)

    return [tabHeaderContent, tabContent]
  }, [tabs, activeTabIndex])


  const handleListClick = useCallback((e: MouseEvent<HTMLUListElement>) => {
    const { tagName, dataset, parentElement } = e.target as HTMLElement

    if (tagName !== 'UL') {
      if (tagName === 'LI') setActiveTabIndex(+dataset.index)
      if (tagName === 'SPAN') setActiveTabIndex(+parentElement.dataset.index)
    }
  }, [tabs, setActiveTabIndex])

  return (
    <div className="tab-content-container" {...props}>
      <header className="tab-content-header">
        <ul className="tabs" onClick={handleListClick}>
          {headerContent}
        </ul>
      </header>
      <div className="tab-content">
        {content[activeTabIndex]}
      </div>
    </div>
  );
}
