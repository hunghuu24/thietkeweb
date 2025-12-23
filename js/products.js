function checkAllClicked(cb) {
    const group = cb.closest('.filter-group');
    group.querySelectorAll('.option').forEach(opt => opt.checked = false);
}

function optionClicked(cb) {
    const group = cb.closest('.filter-group');
    const allCheck = group.querySelector('.checkall');
    if (allCheck) allCheck.checked = false;
}