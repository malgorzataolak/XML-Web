<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="UTF-8" />

<xsl:template match="/">
	<html>
	<head>
		<title>Katalog samochodów</title>
	</head>
	<body>
		<h1>Katalog samochodów</h1>

		<table border="1">
			<tr>
				<th>Marka</th>
				<th>Model</th>
				<th>Rocznik</th>
				<th>Numer katalogowy</th>
				<th>Cena</th>
			</tr>
			<xsl:apply-templates />
		</table>
	</body>
	</html>

</xsl:template>

<xsl:template match="cennik">
	<xsl:for-each select="samochod">
	<xsl:sort select="rocznik" order="descending"/>
	<tr>
		<td>
			<xsl:value-of select="marka"/>
		</td>
		<td>	
			<xsl:value-of select="model"/>
		</td>
		<td>
			<xsl:value-of select="rocznik"/>
		</td>
		<td>
			<xsl:value-of select="numerkatalogowy"/>
		</td>
		<xsl:choose>
			<xsl:when test="cena &lt; 20000">
				<td style="background:green">
			<xsl:value-of select="cena"/>
		</td>
		</xsl:when>
		<xsl:when test="cena &gt; 50000">
			<td style="background:blue">
				<xsl:value-of select="cena"/>
			</td>
		</xsl:when>
		<xsl:when test="cena &gt; 20000">
			<td style="background: red">
				<xsl:value-of select="cena"/>
			</td>
		</xsl:when>
		</xsl:choose>
		
		


		
	</tr>
</xsl:for-each>
</xsl:template>
</xsl:stylesheet>
