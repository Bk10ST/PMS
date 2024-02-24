import organized from '../../../assets/images/organized.jpg';
import balt from '../../../assets/images/balt.jpg';
import task from '../../../assets/images/task.jpg';
import priortize from '../../../assets/images/priortize.jpg';
import productive from '../../../assets/images/productive.jpg';
import plan from '../../../assets/images/plan.jpg';
import memory from '../../../assets/images/memory.jpg';
import learn from '../../../assets/images/learn.jpg';
import got from '../../../assets/images/got.jpg';
import prize from '../../../assets/images/prize.jpg';

import {
    Container, Row, Col
} from "react-bootstrap";

import './blog.css'
import Navbar from '../Navbar/Navbar';

export const Blog = () => {
    return (
       <div> <Navbar/>
         <Container>
               
            <h1 className='text-center'> Blog</h1>
            <Row>
                <Col md={8} className='img-organized pb-3'>
                    <img src={organized} alt="organized" className='' />
                    <p className='text-1'>Get Organized</p>
                </Col>
                <Col md={4} className='pb-3'>
                    <img src={balt} alt="baltImg" className='' />
                    <p className='text-2'>Time Management</p>
                </Col>
                <Col md={4} className='pb-3' >
                    <img src={task} alt="task" className='' />
                    <p className='text-3'>Task Managed</p>
                </Col>
                <Col md={4} className='pb-3' >
                    <img src={priortize} alt="priotize" className='' />
                    <p className='text-4'>it helps Priortize</p>
                </Col>
                <Col md={4} className='pb-3' >
                    <img src={productive} alt="productive" className='' />
                    <p className='text-5'>Productive</p>
                </Col>
                <Col md={4} className='pb-3'>
                    <img src={plan} alt="organized" className='' />
                    <p className='text-6'>Planning</p>
                </Col>
                <Col md={8} className='pb-3'  >
                    <img src={memory} alt="baltImg" className='' />
                    <p className='text-7'>Improves Memory </p>
                </Col>

                <Col md={4} className='pb-3'>
                    <img src={learn} alt="learn" className='' />
                    <p className='text-8'>Work Fast</p>
                </Col>
                <Col md={4} className='pb-3' >
                    <img src={prize} alt="prize" className='' />
                    <p className='text-9'>it's rewarding</p>
                </Col>
                <Col md={4} className='pb-3' >
                    <img src={got} alt="got" className='' />
                    <p className='text-10'>Quicker</p>
                </Col>
            </Row>
        </Container>
       </div>
    )
}