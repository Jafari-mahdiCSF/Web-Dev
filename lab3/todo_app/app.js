const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const listEl = document.getElementById("todoList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

const STORAGE_KEY = "todo_app_items_v1";

/** @type {{id:string, text:string, done:boolean}[]} */
let items = loadItems();

render();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    items.unshift({
        id: crypto.randomUUID(),
        text,
        done: false,
    });

    input.value = "";
    saveItems();
    render();
});

if (clearCompletedBtn) {
    clearCompletedBtn.addEventListener("click", () => {
        const before = items.length;
        items = items.filter((it) => !it.done);
        if (items.length === before) return;
        saveItems();
        render();
    });
}

listEl.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const li = e.target.closest("li");
    if (!li) return;

    const id = li.dataset.id;
    if (!id) return;

    if (btn.classList.contains("check-btn")) {
        toggleDone(id);
    } else if (btn.classList.contains("delete-btn")) {
        deleteItem(id);
    }
});

function toggleDone(id) {
    const it = items.find((x) => x.id === id);
    if (!it) return;
    it.done = !it.done;
    saveItems();
    render();
}

function deleteItem(id) {
    items = items.filter((x) => x.id !== id);
    saveItems();
    render();
}

function render() {
    listEl.innerHTML = "";

    if (items.length === 0) {
        listEl.innerHTML = `
      <li class="item" style="grid-template-columns: 1fr; text-align:center; padding:18px;">
        <span class="text" style="color:#8d8d8d;">No tasks yet — add one above.</span>
      </li>
    `;
        return;
    }

    for (const it of items) {
        const li = document.createElement("li");
        li.className = `item ${it.done ? "completed" : ""}`;
        li.dataset.id = it.id;

        li.innerHTML = `
      <button class="check-btn" type="button" aria-label="Mark completed">
        <i class="fa-solid fa-check"></i>
      </button>

      <span class="text">${escapeHtml(it.text)}</span>

      <button class="delete-btn" type="button" aria-label="Delete">
        <i class="fa-regular fa-trash-can"></i>
      </button>
    `;

        listEl.appendChild(li);
    }
}

function saveItems() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function loadItems() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [
            { id: crypto.randomUUID(), text: "Personal Work No. 1", done: true },
            { id: crypto.randomUUID(), text: "Personal Work No. 2", done: false },
            { id: crypto.randomUUID(), text: "Personal Work No. 3", done: false },
            { id: crypto.randomUUID(), text: "Personal Work No. 4", done: true },
            { id: crypto.randomUUID(), text: "Personal Work No. 5", done: false },
        ];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed
            .filter(x => x && typeof x.id === "string" && typeof x.text === "string")
            .map(x => ({ id: x.id, text: x.text, done: !!x.done }));
    } catch {
        return [];
    }
}

function escapeHtml(s) {
    return s
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
