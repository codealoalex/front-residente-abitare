
import { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function Modal({btn_label, modal_content}) {
    const [visible, setVisible] = useState(false);
    const footerContent = (
        <div>
            <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Button label={btn_label} icon="pi pi-check" onClick={() => setVisible(true)} severity="success" style={{ gap:'0', padding:'5px'}}/>
            <Dialog header="Confirmar trabajo finalizado" visible={visible} style={{ width: '80vw', backgroundColor:'#fff', padding:'30px'}} onHide={() => { if (!visible) return; setVisible(false); }} footer={footerContent}>
                <p className="m-0">
                    {modal_content}
                </p>
            </Dialog>
        </div>
    )
}
