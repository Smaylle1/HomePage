import React, { useState } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import './index.css';




function App() {

    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/'
            }
        },
        {   label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                window.location.hash = "/fileupload"
            }
        }
    ];

    const leftContents = (
        <React.Fragment>
            <Button label="Home" icon="pi pi-home" className="mr-2" />
            <i className="pi pi-bars p-toolbar-separator mr-2" />
            <h1>SG TECH INFORMÁTICA </h1>
        </React.Fragment>
    );

    const rightContents = (
        <React.Fragment>
            <Button icon="pi pi-facebook" className="mr-2" />
            <Button icon="pi pi-whatsapp" className="p-button-success mr-2" />
            <Button icon="pi pi-instagram" className="p-button-danger" />
        </React.Fragment>
    );
    const events1 = [
        { status: 'Equipamento parou?', date: '', icon: 'pi pi-thumbs-down', color:'', image: '' },
        { status: 'Processing', date: '', icon: 'pi pi-desktop', color: '' },
        { status: 'Shipped', date: '', icon: 'pi pi-wrench', color: '' },
        { status: 'Delivered', date: '', icon: 'pi pi-thumbs-up', color: '' }
    ];
    const events2 = [
        ''
    ];
    const customizedMarker = (item) => {
        return (
            <span className="custom-marker shadow-1" style={{ backgroundColor: item.color }}>
                <i className={item.icon} ></i>
            </span>
        );
    };

    const customizedContent = (item) => {
        return (
            <Card 
                title={item.status} 
                subTitle={item.date}>
                { item.image && <img src={`images/product/${item.image}`} 
                onError={(e) => e.target.src=''} 
                alt={item.name} 
                width={200} 
                className="shadow-1" 
            />}
                <p>Queimou??? Não troque, conserte!!!!
                    Reparo em Placas Mãe
                    Como nosso foco é a manutenção avançada em notebooks, 
                    possuímos conhecimento específico baseado na análise do projeto do fabricante, 
                    e técnicas de reparação com a finalidade de detectar, 
                    isolar o defeito e resolver com a substituição de componentes avariados para que a 
                    placa do notebook possa voltar a funcionar de maneira correta.
                    Se sua placa mãe foi condenada por outra assistência técnica, 
                    
                    que tal uma segunda opinião de nossos profissionais?
                </p>
                <Button 
                    label="Entre em contato" 
                    className="p-button-text">
                </Button>
            </Card>
        );
    };


    const [value1, setValue1] = useState('');
    const [date3, setDate3] = useState(null);


    return ( 
    <div className='SgTechInfo'>

        <div className='sgLead'>
            
        <Toolbar
            style={{height:'95px',justifyContent:'initial'}}
            left={leftContents} 
            right={rightContents} 
            />
        </div>

        <div className="field col-12 md:col-4">
     
        <Timeline 
        value={events1} 
        align="alternate" 
        className="customized-timeline" 
        marker={customizedMarker} 
        content={customizedContent} 
        />
        {/* <Timeline 
        value={events2} 
        align="alternate" 
        className="customized-timeline" 
        marker={customizedMarker} 
        content={customizedContent} 
        /> */}
        
       
 
        
        </div>
        </div>
        )

}
export default App