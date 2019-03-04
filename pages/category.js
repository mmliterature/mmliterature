import Layout from '../components/MyLayout.js';
// import CategoryList from '../components/CategoryList';
import { Container, Col, Row, Button } from 'react-bootstrap';
import CategoryList from '../components/CategoryList';

const Category = () => (
  <Layout>
    <Container>
      <Row className="mb-5">
        <Col xs={12} md={12}>
          <h2 className="section-title text-center mb-4">
            <span>Categories</span>
          </h2>
          <CategoryList />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default Category;
