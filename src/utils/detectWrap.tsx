export function detectWrap(
  query: string,
  options: { parentContainer?: HTMLElement | null } = {},
) {
  let prevItem: any = {};
  let currItem: any = {};
  let row: number = 1;
  try {
    const { parentContainer } = options;
    const items: Element[] = Array.from(
      parentContainer
        ? parentContainer.querySelectorAll(query)
        : document.querySelectorAll(query),
    );

    for (let i = 0; i < items.length; i++) {
      currItem = items[i].getBoundingClientRect();
      if (prevItem && prevItem.top < currItem.top) {
        row += 1;
        items[i].setAttribute("data-row", String(row));
        items[i - 1].setAttribute("data-row-status", "next-row");
        items[i - 1].setAttribute("data-col-status", "last");
      } else {
        items[i].setAttribute("data-row", String(row));
        items[i].removeAttribute("data-col-status");
      }
      items[i].setAttribute("data-row-status", "next");
      prevItem = currItem;
    }
  } catch (error) {
    console.log("error", error);
  }

  return { totalRow: row, isWrap: row > 1 };
}
