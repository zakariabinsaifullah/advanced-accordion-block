/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable no-useless-return */
/* eslint-disable no-unused-vars */
// Separate Accordion Block
document.addEventListener('click', function (e) {
	const target = e.target;

	if (target && target !== document) {
		const head = target.classList.contains('aab__accordion_head');
		const headTag = target.classList.contains('aab__accordion_title');
		const icon = target.classList.contains('aab__icon');

		if (!(head || headTag || icon)) {
			return;
		}

		let parent;
		let iconClass;
		if (head) {
			parent = target.parentNode;
			iconClass = target.children[1].children[0];
		} else if (headTag) {
			parent = target.parentNode.parentNode.parentNode;
			iconClass = parent.children[0].children[1].children[0];
		} else if (icon) {
			parent = target.parentNode.parentNode.parentNode;
			iconClass = target;
		}

		// icons
		if (
			iconClass.classList.contains('dashicons-plus-alt2') ||
			iconClass.classList.contains('dashicons-minus')
		) {
			iconClass.classList.toggle('dashicons-plus-alt2');
			iconClass.classList.toggle('dashicons-minus');
		} else if (
			iconClass.classList.contains('dashicons-arrow-down-alt2') ||
			iconClass.classList.contains('dashicons-arrow-up-alt2')
		) {
			iconClass.classList.toggle('dashicons-arrow-down-alt2');
			iconClass.classList.toggle('dashicons-arrow-up-alt2');
		} else if (
			iconClass.classList.contains('dashicons-arrow-down') ||
			iconClass.classList.contains('dashicons-arrow-up')
		) {
			iconClass.classList.toggle('dashicons-arrow-down');
			iconClass.classList.toggle('dashicons-arrow-up');
		} else if (
			iconClass.classList.contains('dashicons-plus-alt') ||
			iconClass.classList.contains('dashicons-dismiss')
		) {
			iconClass.classList.toggle('dashicons-plus-alt');
			iconClass.classList.toggle('dashicons-dismiss');
		} else if (
			iconClass.classList.contains('dashicons-insert') ||
			iconClass.classList.contains('dashicons-remove')
		) {
			iconClass.classList.toggle('dashicons-insert');
			iconClass.classList.toggle('dashicons-remove');
		}

		parent.children[1].classList.toggle('aab__accordion_body--show');
		// toggle attribute
		parent.children[1].setAttribute(
			'aria-expanded',
			parent.children[1].classList.contains('aab__accordion_body--show')
				? 'true'
				: 'false'
		);
	}
});
