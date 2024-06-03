export const accordionItem = (id, step, title, description) => `
    <div key=${id} class="accordion-item accordion-${step}">
        <div class="accordion-header bg-dark-100">
            <div class="accordion-step h-3 color-secondary">
                <span>${step}</span>
            </div>
            <h3 class="h">${title}</h3>
        </div>
        <div class="accordion-body">
            <p>${description}</p>
        </div>
    </div>
`;
