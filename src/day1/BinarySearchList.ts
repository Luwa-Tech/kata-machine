export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    do {
        const m = Math.floor(lo + (hi - lo) / 2);
        let value = haystack[m];
        
        if (needle === value) {
            return true;
        } else if (needle > value) {
            lo = m + 1;
        } else {
            hi = m;
        }
    } while (lo < hi)
    
    return false;
}