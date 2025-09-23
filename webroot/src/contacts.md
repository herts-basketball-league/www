---
title: Contacts
layout: default.html
date: git Last Modified
---

{%- assign contacts = contacts | sort: 'teamName' | sort: 'division' | group_by_exp: 'item', 'item.division' -%}

<style>
	tr {
		vertical-align: baseline;
	}
</style>


<figure>
	<table>
		<thead>
			<tr>
				<th>Team Name</th>
				<th>Contacts</th>
				<th>Venue</th>
			</tr>
		</thead>
		<tbody>
			{%- for contact in contacts %}
				<tr><td colspan="3"><b>{{ contact.name }}</b></td></tr>
				{% for team in contact.items %}
					<tr id="{{ team.teamName | slug }}">
						<td>
							<h4><a href="#{{ team.teamName | slug }}">{{ team.teamName }}</a></h4>
							<table>
								<tbody>
									<tr>
										<th>Home Kit</th>
										<td>{{ team.homeColour }}</td>
									</tr>
									<tr>
										<th>Away Kit</th>
										<td>{{ team.awayColour }}</td>
									</tr>
								</tbody>
							</table>
						</td>
						<td>
							<table>
								<tbody>
									<tr>
										<th>Primary</th>
										<td>{{ team.primaryContactName }}</td>
									</tr>
									<tr>
										<th>Email</th>
										<td>
											{%- if team.primaryContactShare == 'Yes' -%}
												<a href="mailto:{{ team.primaryContactEmail }}">{{ team.primaryContactEmail }}</a>
											{%- else -%}
												Redacted
											{%- endif -%}
										</td>
									</tr>
									<tr>
										<th>Phone</th>
										<td>
											{%- if team.primaryContactShare == 'Yes' -%}
												<a href="tel:{{ team.primaryContactPhone }}">{{ team.primaryContactPhone }}</a>
											{%- else -%}
												Redacted
											{%- endif -%}
										</td>
									</tr>
								</tbody>
							</table>
							{%- if team.alternativeContactName != '' -%}
							<table>
								<tbody>
									<tr>
										<th>Alternative</th>
										<td>{{ team.alternativeContactName }}</td>
									</tr>
									<tr>
										<th>Email</th>
										<td>
											{%- if team.alternativeContactShare == 'Yes' -%}
												<a href="mailto:{{ team.alternativeContactEmail }}">{{ team.alternativeContactEmail }}</a>
											{%- else -%}
												Redacted
											{%- endif -%}
										</td>
									</tr>
									<tr>
										<th>Phone</th>
										<td>
											{%- if team.alternativeContactShare == 'Yes' -%}
												<a href="tel:{{ team.alternativeContactPhone }}">{{ team.alternativeContactPhone }}</a>
											{%- else -%}
												Redacted
											{%- endif -%}
										</td>
									</tr>
								</tbody>
							</table>
							{%- endif -%}
						</td>
						<td>
							<table>
								<tbody>
									<tr>
										<th>Game Day</th>
										<td>{{ team.gameDay }}</td>
									</tr>
									<tr>
										<th>Tipoff</th>
										<td>{{ team.tipoff }}</td>
									</tr>
									<tr>
										<th>Venue</th>
										<td>{{ team.homeVenue | replace: ",", "<br>" }}</td>
									</tr>
									<tr>
										<th>Free Parking</th>
										<td>{{ team.freeParking }}</td>
									</tr>
									{%- if team.freeParking == 'No'-%}
										<tr>
											<th>Parking Notes</th>
											<td>{{ team.parkingNotes }}</td>
										</tr>
									{%- endif -%}
								</tbody>
							</table>
						</td>
					</tr>
				{%- endfor %}
			{%- endfor %}
		</tbody>
	</table>
</figure>

<footer>
	<p>Last updated: {{ page.date | date: "%A, %e %B %Y, %l:%M%P" }}</p>
</footer>
