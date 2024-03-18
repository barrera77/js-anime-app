function renderPaginatorComponent() {
  const paginatorComponent = `
    <div id="paginator" class="">
    <button
      id="previous-page-number"
      type="button"
      class="min-h-[38px] min-w-[38px] py-2 px-2.5 flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
    >
      <svg
        class="flex-shrink-0 w-3.5 h-3.5"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
      <span aria-hidden="true" class="small-caps sr-only">Previous</span>
    </button>
    <div id="page-number">
      <span
        id="current-page-number"
        class="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:focus:bg-white/10"
        >1</span
      >
      <span
        class="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-gray-500"
        >of</span
      >
      <span
        id="last-page-number"
        class="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-gray-500"
        >3</span
      >
    </div>
    <button
      id="next-page-number"
      type="button"
      class="min-h-[38px] min-w-[38px] py-2 px-2.5 flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
    >
      <span aria-hidden="true" class="small-caps sr-only">Next</span>
      <svg
        class="flex-shrink-0 w-3.5 h-3.5"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </button>
  </div>`;

  return paginatorComponent;
}

export { renderPaginatorComponent };
