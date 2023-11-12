import type {JSX} from 'solid-js/jsx-runtime';
import {ArticleLink} from '~/components';

export interface ArticleProperties {
	id: number;
	content: JSX.Element;
	separator: boolean;
}

/**
 * Create a list of articles bind with default values.
 * @param articles - The list of articles to create.
 * @returns The list of articles with default values
 */
function createArticles(
	articles: Partial<ArticleProperties>[]
): ArticleProperties[] {
	return articles.map((article, index) => {
		const typeSafeArticle: ArticleProperties = {
			id: article.id || index + 1,
			content: article.content || <></>,
			separator: index !== articles.length - 1 && (article.separator ?? true),
		};

		return typeSafeArticle;
	});
}

export const getArticles = createArticles([
	{
		content: (
			<p>
				Tout joueur ayant perdu une partie d'ARAM est tenu de participer à une
				nouvelle partie.
			</p>
		),
	},
	{
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
		content: (
			<p>
				À partir de 1h les ARAM pour les personnes présentes sur le discord sont
				obligatoires.
			</p>
		),
	},
	{
		content: (
			<p>
				Dans le cas ou il ne reste que 2 personnes, en cas d’accord des deux
				participants, la règle des ARAM peut être abolie.
			</p>
		),
	},
	{
		content: <p>Le leave en champion select est strictement interdit.</p>,
	},
	{
		content: (
			<p>
				Si une personne extérieure souhaite rejoindre les actuels participants
				en cours de règle des ARAM, ceux-ci doivent alors impérativement finir
				leur partie en cours et elle sera alors comptabilisée comme une défaite,
				qu’importe le résultat.
			</p>
		),
	},
	{
		content: (
			<p>
				À partir de 3h, il est obligatoire d’effectuer au moins 3 games pour
				abolir la règle des ARAM même si les 2 seules personnes s’accordent à
				arrêter.
			</p>
		),
	},
	{
		content: (
			<p>
				Si une game est inférieure à 15 minutes elle est considérée comme une
				défaite.
			</p>
		),
	},
	{
		content: (
			<p>
				En cas de victoire à la première partie de la série d'ARAM, cette partie
				est comptabilisée comme une défaite.
			</p>
		),
	},
	{
		content: (
			<p>
				Si une game se fini 10 minutes avant 1h, la règle des ARAM s’applique.
			</p>
		),
	},
	{
		content: (
			<p>
				Si Renaud propose une règle des ARAM, toute personne présente sur le
				discord et jouant à LoL est obligé d'accepter.
			</p>
		),
	},
	{
		content: (
			<p>
				Si une majorité de personnes présente dans le vocal participent à une
				règle des ARAM, alors toutes les personnes présentent dans le vocal
				doivent y participer.
			</p>
		),
	},
	{
		id: 49.3,
		content: (
			<p>
				Les 2 créateurs de la règle des ARAM peuvent accorder une doléance en
				cas d'accord.
			</p>
		),
	},
	{
		id: 69,
		content: (
			<p>
				Une dérogation à
				<ArticleLink id={5} />
				est possible par le biais d'un pari : un abandon est autorisé, mais si
				la partie est perdue, deux victoires sont nécessaires pour abolir la
				règle.
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
					En cas de non respect de toute règle de l'ARAM, un ban ARAM est prévu
					:
				</p>
				<ul>
					<li>1 non respect → ban 1 jour,</li>
					<li>2 non respects → ban 1 semaine,</li>
					<li>3 non respects → ban 1 mois.</li>
				</ul>
			</>
		),
	},
]);
