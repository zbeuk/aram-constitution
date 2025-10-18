import type { JSX } from "solid-js/jsx-runtime";
import { ArticleLink } from "~/components";

export interface ArticleProperties {
  id: number;
  content: JSX.Element;
  separator?: boolean;
}

/**
 * Create a list of articles bind with default values.
 * @param articles - The list of articles to create.
 * @returns The list of articles with default values
 */
function createArticles(articles: ArticleProperties[]): ArticleProperties[] {
  return articles.map((article, index) => {
    const typeSafeArticle: ArticleProperties = {
      id: article.id,
      content: article.content,
      separator: article.separator ?? index !== articles.length - 1,
    };

    return typeSafeArticle;
  });
}

export const getArticles = createArticles([
  {
    id: 1,
    content: (
      <p>
        Les joueurs doivent relançer une partie tant qu'ils n'ont pas gagner.
      </p>
    ),
  },
  {
    id: 2,
    content: (
      <p>
        En cas de victoire à la première partie, cette partie est comptabilisée
        comme une défaite.
      </p>
    ),
  },
  {
    id: 3,
    content: (
      <p>
        En cas de troll de la part d’un coéquipier ou plus,
        <ArticleLink id={1} />
        est aboli et les joueurs (autres que trollers) peuvent retourner vaquer
        à leurs occupations.
      </p>
    ),
  },
  {
    id: 4,
    content: (
      <p>
        À partir de 1h les ARAM pour les personnes présentes sur le discord sont
        obligatoires.
      </p>
    ),
  },
  {
    id: 5,
    content: (
      <p>
        Si une partie se fini 10 minutes avant 1h, la règle des ARAM s’applique.
      </p>
    ),
  },
  {
    id: 6,
    content: (
      <p>
        Dans le cas ou il ne reste que 2 personnes, en cas d’accord des deux
        participants, la règle des ARAM peut être abolie.
      </p>
    ),
  },
  {
    id: 7,
    content: (
      <p>Quitter en sélection des champions est strictement interdit.</p>
    ),
  },
  {
    id: 8,
    content: (
      <p>
        Si une personne souhaite rejoindre les actuels participants en cours de
        règle des ARAM, ceux-ci doivent finir leur partie en cours et elle sera
        alors comptabilisée comme une défaite, qu’importe le résultat.
      </p>
    ),
  },
  {
    id: 9,
    content: (
      <p>
        À partir de 3h, il est obligatoire d’effectuer au moins 3 parties pour
        abolir la règle des ARAM. Il n'est plus possible d'utiliser
        <ArticleLink id={6} /> ou <ArticleLink id={49.3} />.
      </p>
    ),
  },
  {
    id: 10,
    content: (
      <p>
        Si une partie est inférieure à 15 minutes ou que les ennemies
        abandonnent elle est considérée comme une défaite.
      </p>
    ),
  },
  {
    id: 11,
    content: (
      <p>
        Si Renaud propose une règle des ARAM, toute personne présente sur le
        discord et jouant à LoL sont obligés d'accepter.
      </p>
    ),
  },
  {
    id: 18,
    content: <p>☠️ Mange tes morts !</p>,
  },
  {
    id: 49.3,
    content: (
      <p>
        Les 2 créateurs (Thomas et Lucas) de la règle des ARAM peuvent accorder
        une doléance en cas d'accord.
      </p>
    ),
  },
  {
    id: 55.55,
    content: (
      <p>
        🎉 Dans le cas ou un allié fait un pentakill dans une partie elle est
        considérée comme une défaite il faut en relancer une autre pour fêter le
        pentakill.
      </p>
    ),
  },
  {
    id: 69,
    content: (
      <p>
        Une dérogation à
        <ArticleLink id={5} />
        est possible par le biais d'un pari :
        <ul>
          <li>
            Un abandon est autorisé, mais si la partie est perdue, deux
            victoires sont nécessaires pour abolir la règle.
          </li>
        </ul>
      </p>
    ),
  },
  {
    id: 117,
    content: <p>Interdit de modifier un article sauf sous referendum.</p>,
  },
  {
    id: 999,
    content: (
      <>
        <p>
          En cas de non respect de toute règle de l'ARAM, un ban de la règle est
          prévu :
        </p>
        <ul>
          <li>1 non respect → ban 1 mois</li>
          <li>2 non respects → ban 3 mois</li>
          <li>3 non respects → ban 1 an</li>
        </ul>
      </>
    ),
  },
]);
