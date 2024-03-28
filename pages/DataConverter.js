import React, { useState } from 'react';
import styles from './Converter.module.css';

function Converter() {
    const [bit, setBit] = useState("");
    const [bytes, setBytes] = useState("");
    // 注意：1 KB = 1024 B，不是1000 B
    const [kb, setKb] = useState("");
    const [mb, setMb] = useState("");
    const [gb, setGb] = useState("");
    const [tb, setTb] = useState("");

    const handleChange = (value, setter, multipliers) => {
        setter(value);
        if (value === '') {
            setBit(''); setBytes(''); setKb(''); setMb(''); setGb(''); setTb('');
        } else {
            setBit(value * multipliers.bit);
            setBytes(value * multipliers.bytes);
            setKb(value * multipliers.kb);
            setMb(value * multipliers.mb);
            setGb(value * multipliers.gb);
            setTb(value * multipliers.tb);
        }
    };

    return (
        <div className={styles.container}>
            <h1>在线文件大小换算</h1>
            <label className={styles.label}>
                <input className={styles.inputField} type="number" value={bit} onChange={(e) =>
                    handleChange(e.target.value, setBit, { bit: 1, bytes: 1 / 8, kb: 1 / 8192, mb: 1 / 8388608, gb: 1 / 8589934592, tb: 1 / 8796093022208 })} placeholder="Bit" />
                <span className={styles.labelText}>&nbsp;&nbsp;Bit</span>
            </label>
            <label className={styles.label}>
                <input className={styles.inputField} type="number" value={bytes} onChange={(e) =>
                    handleChange(e.target.value, setBytes, { bit: 8, bytes: 1, kb: 1 / 1024, mb: 1 / 1048576, gb: 1 / 1073741824, tb: 1 / 1099511627776 })} placeholder="Bytes" />
                <span className={styles.labelText}>&nbsp;&nbsp;Bytes</span>
            </label>
            <label className={styles.label}>
                <input className={styles.inputField} type="number" value={kb} onChange={(e) =>
                    handleChange(e.target.value, setKb, { bit: 8192, bytes: 1024, kb: 1, mb: 1 / 1024, gb: 1 / 1048576, tb: 1 / 1073741824 })} placeholder="KB" />
                <span className={styles.labelText}>&nbsp;&nbsp;KB</span>
            </label>
            <label className={styles.label}>
                <input className={styles.inputField} type="number" value={mb} onChange={(e) =>
                    handleChange(e.target.value, setMb, { bit: 8388608, bytes: 1048576, kb: 1024, mb: 1, gb: 1 / 1024, tb: 1 / 1048576 })} placeholder="MB" />
                <span className={styles.labelText}>&nbsp;&nbsp;MB</span>
            </label>
            <label className={styles.label}>
                <input className={styles.inputField} type="number" value={gb} onChange={(e) =>
                    handleChange(e.target.value, setGb, { bit: 8589934592, bytes: 1073741824, kb: 1048576, mb: 1024, gb: 1, tb: 1 / 1024 })} placeholder="GB" />
                <span className={styles.labelText}>&nbsp;&nbsp;GB</span>
            </label>
            <label className={styles.label}>
                <input className={styles.inputField} type="number" value={tb} onChange={(e) =>
                    handleChange(e.target.value, setTb, { bit: 8796093022208, bytes: 1099511627776, kb: 1073741824, mb: 1048576, gb: 1024, tb: 1 })} placeholder="TB" />
                <span className={styles.labelText}>&nbsp;&nbsp;TB</span>
            </label>
        </div>
    );
}

export default Converter;
