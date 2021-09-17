const pipe = (...fns) => fns.reduceRight((a, b) => (...args) => a(b(...args)));

export default pipe;
