import React from 'react';
import { TabOverflowPopupProps } from '../../types/api';
import { OverflowedTabInfo } from '../../types/internal';

const TabOverflowPopup: React.FC<TabOverflowPopupProps> = ({
    hiddenTabsToTheLeft,
    hiddenTabsToTheRight,
    close,
    select
}) => {
    const createSection = (tabs: OverflowedTabInfo[], title: string) => {
        return (
            <ul>
                <li className="title">{title}</li>
                {tabs.map((tab) => (
                    <li key={tab.windowId} onClick={() => handleTabClick(tab.windowId)}>
                        <span>{tab.title}</span>
                        <div className="t42-tab-close-button-content" onClick={() => handleTabClose(tab.windowId)}></div>
                    </li>
                ))}
            </ul>
        );
    };

    const handleTabClick = (windowId: string) => {
        select(windowId);
    };

    const handleTabClose = (windowId: string) => {
        close(windowId);
    };

    return (
        <div className="t42-wg-tab-overflow-popup">
            {hiddenTabsToTheLeft.length > 0 && createSection(hiddenTabsToTheLeft, "Open left")}
            {hiddenTabsToTheLeft.length > 0 && hiddenTabsToTheRight.length > 0 && <hr />}
            {hiddenTabsToTheRight.length > 0 && createSection(hiddenTabsToTheRight, "Open right")}
        </div>
    );
};

export default TabOverflowPopup;