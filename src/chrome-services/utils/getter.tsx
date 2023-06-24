async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

export const getCurrentTabUrl = (): string | undefined => {
    getCurrentTab()!.then((tab) => {
        console.log(tab.url)
        return tab.url;
    });

  };
  
export const getCurrentTabUId = () => {
    getCurrentTab()!.then((tab) => {
        console.log(tab.id)
        return tab.id;
    });
};