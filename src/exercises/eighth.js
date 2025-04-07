(() => {
	function restoreIpAddresses(s) {
		const result = [];
		if (s.length < 4 || s.length > 12) return result;

		const backtrack = (start, parts) => {
			if (parts.length === 4) {
				if (start === s.length) {
					result.push(parts.join('.'));
				}
				return;
			}

			for (let len = 1; len <= 3; len++) {
				if (start + len > s.length) break;
				const segment = s.substring(start, start + len);
				if (isValid(segment)) {
					parts.push(segment);
					backtrack(start + len, parts);
					parts.pop();
				}
			}
		};

		const isValid = (segment) => {
			if (segment.length > 1 && segment[0] === '0') return false;
			const num = parseInt(segment, 10);
			return num >= 0 && num <= 255;
		};

		backtrack(0, []);
		return result;
	}

	console.log(restoreIpAddresses('25525511135')); // Output: ["255.255.111.35", "255.255.11.135"]
})();
