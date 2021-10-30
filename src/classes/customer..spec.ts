import { IndividualCustomer, EnterpriseCustomer } from '../classes/customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('Should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Vitor', 'Silva', '111.111');

    expect(sut).toHaveProperty('firstName', 'Vitor');
    expect(sut).toHaveProperty('lastName', 'Silva');
    expect(sut).toHaveProperty('cpf', '111.111');
  });

  it('Should have methods to get name and idn for individual customers', () => {
    const sut = createIndividualCustomer('Vitor', 'Silva', '111.111');

    expect(sut.getName()).toBe('Vitor Silva');
    expect(sut.getIDN()).toBe('111.111');
  });
});

describe('EnterpriseCustomer', () => {
  it('Should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy', '222');

    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '222');
  });

  it('Should have methods to get name and idn for enterprise customerers', () => {
    const sut = createEnterpriseCustomer('Udemy', '222');

    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('222');
  });
});
