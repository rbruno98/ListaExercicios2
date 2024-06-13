/*
Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
nomeCliente.
2. Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
disponíveis em uma cidade específica.
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
aumentar o número de quartos disponiveis no hotel correspondente.
○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
cliente.
3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
○ As reservas devem ser identificadas por um ID único e associadas a um
único hotel.

4. Desafios Adicionais (Opcionais):
○ Implementar uma função de check-in e check-out que atualize a
disponibilidade de quartos.
○ Gerar relatórios de ocupação para um hotel.
○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
avaliações dentro do objeto do hotel.
*/

let hoteis = [];
let reservas = [];

let IdReserva = 1;
let IdHotel = 1;

function idHoteis() {
  return IdHotel++;
}

function idReservas() {
  return IdReserva++;
}

function adicionarHotel(nome, cidade, quartosTotais) {
  let id = idHoteis();

  const hotel = {
    id,
    nome,
    cidade,
    quartosTotais,
    quartosDisponíveis: quartosTotais,
  };
  hoteis.push(hotel);
  console.log(`O hotel ${nome} foi adicionado!`);
}

function hotelPorCidade(cidade) {
  let hoteisCidade = hoteis.filter((hotel) => hotel.cidade === cidade);
  if (hoteisCidade.length > 0) {
    hoteisCidade.forEach((hotel) => {
      console.log(`${hotel.nome}`);
    });
  } else {
    console.log(`Em ${cidade} não foi encontrado nenhum hotel`);
  }
}

function reserva(idHotel, nomeCliente) {
  let hotel = hoteis.find((hotel) => hotel.id === idHotel);
  if (hotel && hotel.quartosDisponíveis > 0) {
    let indexReserva = idReservas();
    const reserva = {
      indexReserva,
      idHotel,
      nomeCliente,
    };
    reservas.push(reserva);
    hotel.quartosDisponíveis--;
    console.log(`Reserva feita com sucesso!`);
    console.log(`- Nome de: ${nomeCliente}. Hotel: ${hotel.nome}`);
  } else if (hotel) {
    console.log(
      `No hotel ${hotel.nome} não há quartos disponíveis no momento.`
    );
  } else {
    console.log(`ID de hotel não encontrada.`);
  }
}

function cancelarReserva(indexReserva) {
  const idReserva = reservas.findIndex(
    (reserva) => reserva.indexReserva === indexReserva
  );
  if (idReserva !== -1) {
    const reserva = reservas[idReserva];
    const hotel = hoteis.find((hotel) => hotel.id === reserva.idHotel);
    if (hotel) {
      hotel.quartosDisponíveis++;
    }
    reservas.splice(idReserva, 1);
    console.log(`Reserva com ID ${indexReserva} cancelada!`);
  } else {
    console.log(`ID de reserva não encontrada.`);
  }
}

function listarReservas() {
  if (reservas.length > 0) {
    reservas.forEach((reserva) => {
      let hotel = hoteis.find((hotel) => hotel.id === reserva.idHotel);
      console.log(
        `- Reserva: ${reserva.indexReserva}. Cliente: ${reserva.nomeCliente}`
      );
    });
  } else {
    console.log(`Nenhuma reserva foi encontrada.`);
  }
}

// Breve exemplo para usuário aplicar o sistema
// adicionarHotel("Hotel Laghetto", "Canela", 10);
// adicionarHotel("Hotel Ibís", "Novo Hamburgo", 25);
// hotelPorCidade("Novo Hamburgo");
// reserva(1, "Bruno");
// reserva(2, "João");
// listarReservas();
// cancelarReserva(1);
// listarReservas();
