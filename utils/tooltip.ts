export function handleTooltip(
  HTMLselectorContainer: string,
  HTMLselectorTooltip: string,
  text: string
) {
  const containerTooltip: HTMLElement | null = document.querySelector(
    HTMLselectorContainer
  );
  const tooltip: HTMLElement | null =
    document.querySelector(HTMLselectorTooltip);
  const timer = (ms: number) => new Promise((res) => setTimeout(res, ms));
  (tooltip as HTMLElement).innerHTML = text;

  (async function () {
    await timer(200);
    (containerTooltip as HTMLElement).style.opacity = '100';
    await timer(2000);
    (containerTooltip as HTMLElement).style.opacity = '0';
  })();
}
